import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <ul>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Product</h5>
          <ul>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Help desk</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Services</h5>
          <ul>
            <li><a href="#" className="hover:underline">Digital Marketing</a></li>
            <li><a href="#" className="hover:underline">Content Writing</a></li>
            <li><a href="#" className="hover:underline">SEO for Business</a></li>
            <li><a href="#" className="hover:underline">UI Design</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-4">Legal</h5>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>© 2024 SkillShift. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
