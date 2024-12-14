"use client";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export function SubmitLinkForm() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   console.log("Form submitted");
  // };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="outline-none">
        <span className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full hover:underline underline-offset-4">
          Submit link
          <ArrowTopRightIcon className="w-4 h-4" />
        </span>
      </Dialog.Trigger>
      <Dialog.Content className="fixed z-30 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        <Dialog.Title className="text-lg font-semibold">
          Submit a new link
        </Dialog.Title>
        <Dialog.Description className="mt-2 text-sm text-gray-500">
          Open an <b>issue</b> and will take a look and update the links
          accordingly{" "}
        </Dialog.Description>
        {/* <form onSubmit={handleSubmit} className="mt-4">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="ai">AI</option>
                <option value="user-experience">User Experience</option>
                <option value="social">Social</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Cancel
              </button>
            </Dialog.Close>
            <button
              type="submit"
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form> */}
        <Dialog.Close asChild>
          <button
            className="absolute outline-none right-4 top-4 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none "
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
