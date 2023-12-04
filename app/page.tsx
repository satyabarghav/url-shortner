"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { stringify } from "querystring";
import React from "react";
import { useCopyToClipboard } from 'usehooks-ts'
interface UrlForm {
  fullUrl: string;
}

export default function Home() {
  const { register, handleSubmit } = useForm<UrlForm>();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const [value, copy] = useCopyToClipboard()
  const baseUrl = "https://url-shortner-chi-silk.vercel.app/"
  const onSubmit = async (data: UrlForm) => {
    try {
      const urlInfo = await axios.post("/api/shrink", data);
      let noisyUrl = stringify(urlInfo.data);
      let shortUrl = noisyUrl.replace("shortUrl=", "")
      setUrl(baseUrl+shortUrl);

      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error while shrinking URL:", error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className="text-5xl font-extrabold">
          Shorten your
          <span className="text-5xl font-extrabold text-violet-600"> URLs</span>
        </h1>
        <br />
        <div className="text-xl">
          <h3 className="font-sans text-slate-500">
            Say Goodbye to{" "}
            <span className="text-red-400 font-semibold">Lengthy</span> URLs
          </h3>
        </div>
      </div>
      <div className="flex gap-3 py-3">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body text-center">
            <div className="label">
              <div className="label-text text-neutral-content">Long URL</div>
            </div>
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="URL goes here ->"
                className="input input-ghost input-primary input-md w-full md:max-w-xs lg:max-w-sm xl:max-w-md"
                {...register("fullUrl")}
              />
              <br />
              <button
                className="btn btn-outline btn-secondary sm:btn-sm md:btn-md lg:btn-md"
                type="submit"
              >
                Shrink
              </button>
            </form>
            {showSuccessMessage && (
                 <div className="flex items-center">
                 <input
                   readOnly
                   type="text"
                   defaultValue={url}
                   className="input input-ghost input-primary input-md w-full md:max-w-xs lg:max-w-sm xl:max-w-md"
                 />
                 {/* Copy to Clipboard button */}
                 <button
                   type="button"
                   className="btn btn-primary"
                   onClick={() =>{
                    copy(url)
                   }}
                 >
                   Copy
                 </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
