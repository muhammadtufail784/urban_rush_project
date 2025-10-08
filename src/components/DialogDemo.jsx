"use client"

import React from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export function DialogDemo({children}) {
  return (
    <div className="flex items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{children}</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[689px] w-full  bg-gradient-to-br from-blue-100 to-green-100 border-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-3xl font-bold text-black mb-2">Download the App Now!</DialogTitle>
            <DialogDescription className="text-lg text-gray-700">
              Choose your role and start your journey with urbanRush
            </DialogDescription>
          </DialogHeader>
            <div className="bg-white  rounded-2xl md:px-6 p-2 shadow-lg flex flex-wrap justify-between items-center gap-6">
              <div className=" flex justify-end items-center md:block hidden">
                <Image 
                  src="/manandphone.png" 
                  alt="Customer" 
                  width={200} 
                  height={200} 
                  className="  rounded-xl"
                />
              </div>
              <div className="md:flex-0  flex-1 text-center md:text-right">
                <h3 className="text-2xl font-bold text-black mb-2">Download as Customer</h3>
                <p className="text-lg text-gray-700 mb-4">Start delivering your items.</p>
                <a href="https://play.google.com/store/apps/details?id=com.scent.urban_rush_customer" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Download Now
                </a>
              </div>
            </div>

            {/* Driver Card */}
            <div className="bg-white rounded-2xl md:p-6 p-2 shadow-lg flex flex-col md:flex-row-reverse items-center gap-6">
              <div className="flex-shrink-0 md:block hidden">
                <Image 
                  src="/manandbox.png" 
                  alt="Driver" 
                  width={200} 
                  height={200} 
                  className="w-48 h-48 object-cover rounded-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-black mb-2">Download Driver App</h3>
                <p className="text-lg text-gray-700 mb-4">Start earning with urbanRush.</p>
                <a href="https://play.google.com/store/apps/details?id=com.urban.urban_rush_driver&pli=1" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Download Now
                </a>
              </div>
              
            </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}
