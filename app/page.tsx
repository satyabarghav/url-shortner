"use client";
import { button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
interface UrlForm {
  fullUrl: string;
}

export default function Home() {
  useRouter
  const { register, handleSubmit } = useForm<UrlForm>();

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-5xl font-extrabold">
            Shorten your
            <span className="text-5xl font-extrabold text-violet-600">
              {" "}
              URLs
            </span>
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
              <form
                className="space-y-3"
                onSubmit={handleSubmit(async (data) => 
                  await axios.post('/api/shrink',data))}
              >
                <input
                  type="text"
                  placeholder="URL goes here ->"
                  className="input input-ghost input-primary input-md w-full md:max-w-xs lg:max-w-sm xl:max-w-md"
                  {...register("fullUrl")}
                />
                <br />
                <button className="btn btn-outline btn-secondary sm:btn-sm md:btn-md lg:btn-md">
                  Shrink
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
