import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <h2 className="text-2xl font-bold text-green-600">GOODI</h2>
          <p className="mt-4 text-sm text-gray-600">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="#" className="text-green-600 hover:text-green-800">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-green-600 hover:text-green-800">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Main Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Offers</a></li>
            <li><a href="#" className="hover:underline">Menus</a></li>
            <li><a href="#" className="hover:underline">Reservation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> example@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +614-045 246 948
            </li>
            <li><a href="#" className="hover:underline">Social media</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-12">
        Copyright © 2023 Goodi | All rights reserved
      </div>
    </footer>
  );
}
