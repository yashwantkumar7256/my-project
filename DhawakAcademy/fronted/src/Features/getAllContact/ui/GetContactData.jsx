import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";
import api from "../../../api";

const GetContactData = () => {
    const { accessToken, setAccessToken } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [contactData, setContactData] = useState([]);
    const [error, setError] = useState("");
    const initialAccessToken = useRef(accessToken);

    useEffect(() => {
        let isMounted = true;

        const refreshAccessToken = async () => {
            const response = await api.get("/api/auth/refresh");
            const token = response.data.accessToken;

            if (!token) {
                throw new Error("Refresh endpoint did not return an access token.");
            }

            if (isMounted) {
                setAccessToken(token);
            }

            return token;
        };

        const fetchContacts = async (token) => api.get("/api/contact", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const initializeAuth = async () => {
            try {
                let token = initialAccessToken.current;
                let refreshed = false;

                if (!token) {
                    token = await refreshAccessToken();
                    refreshed = true;
                }

                let response;
                try {
                    response = await fetchContacts(token);
                } catch (requestError) {
                    if (requestError.response?.status !== 401 || refreshed) {
                        throw requestError;
                    }

                    token = await refreshAccessToken();
                    response = await fetchContacts(token);
                }

                if (isMounted) {
                    setContactData(Array.isArray(response.data.data) ? response.data.data : []);
                    setError("");
                }
            } catch (requestError) {
                if (isMounted) {
                    if (requestError.response?.status === 401) {
                        setAccessToken(null);
                    }
                    const message =
                        requestError.response?.data?.message ||
                        requestError.response?.data?.Message ||
                        requestError.message ||
                        "Could not load contacts.";
                    setError(message);
                    toast.error(message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        initializeAuth();

        return () => {
            isMounted = false;
        };
    }, [setAccessToken]);

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
                <div className="mx-auto max-w-6xl animate-pulse">
                    <div className="mb-8 h-8 w-56 rounded bg-slate-800" />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="h-52 rounded-2xl border border-slate-800 bg-slate-900" />
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
            <section className="mx-auto max-w-6xl">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                            Admin dashboard
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Contact submissions
                        </h1>
                    </div>
                    <p className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                        {contactData.length} {contactData.length === 1 ? "submission" : "submissions"}
                    </p>
                </div>

                {error ? (
                    <div role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-200">
                        <p className="font-semibold">Unable to load contact submissions</p>
                        <p className="mt-1 text-sm">{error}</p>
                    </div>
                ) : contactData.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-16 text-center">
                        <h2 className="text-lg font-semibold">No submissions yet</h2>
                        <p className="mt-2 text-sm text-slate-400">
                            Contact submissions will appear here when they are received.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {contactData.map((contact) => (
                            <article
                                key={contact._id || contact.id}
                                className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <h2 className="truncate text-xl font-semibold text-white">
                                            {contact.name || "Unnamed contact"}
                                        </h2>
                                        <p className="mt-1 text-sm text-slate-400">
                                            {contact.age ? `${contact.age} years old` : "Age not provided"}
                                        </p>
                                    </div>
                                    <span className="shrink-0 rounded-lg bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300">
                                        {contact.course || "Course not specified"}
                                    </span>
                                </div>

                                <div className="mt-6 border-t border-slate-800 pt-4">
                                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                        Mobile
                                    </p>
                                    <a
                                        href={`tel:${contact.mob || ""}`}
                                        className="mt-1 inline-block text-sm font-medium text-slate-200 transition group-hover:text-sky-300"
                                    >
                                        {contact.mob || "Not provided"}
                                    </a>
                                </div>

                                {(contact._id || contact.id) && (
                                    <p className="mt-4 truncate text-xs text-slate-600" title={contact._id || contact.id}>
                                        ID: {contact._id || contact.id}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default GetContactData;