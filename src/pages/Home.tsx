import React from 'react';
import { ArrowRight, BarChart2, Target, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Turn Clicks into Customers with High-Performance Facebook Ads
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              We help eCommerce brands scale profitably with data-driven ad strategies. 
              More sales. Higher ROI. Less ad waste.
            </p>
            <Link 
              to="/consultation" 
              className="bg-[#005f8d] hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 transition-all"
            >
              Get a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            We Help eCommerce Brands Scale—Profitably.
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#0077b5] mb-2">5X</p>
              <p className="text-gray-600">Average Revenue Growth</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#0077b5] mb-2">$50M+</p>
              <p className="text-gray-600">Ad Spend Managed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#0077b5] mb-2">100+</p>
              <p className="text-gray-600">Successful Campaigns</p>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl">
            <p className="text-xl italic text-center mb-4">
              "Nero Media helped us 5X our revenue with just one campaign!"
            </p>
            <p className="text-center font-semibold">— John Smith, Fashion Brand CEO</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            We Know What Works for eCommerce Ads—And We Deliver Results.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Target className="w-12 h-12 text-[#0077b5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven ROAS Strategies</h3>
              <p className="text-gray-600">We optimize for profits, not just clicks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Zap className="w-12 h-12 text-[#0077b5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Winning Creative & Ad Copy</h3>
              <p className="text-gray-600">High-converting visuals & messaging that sell.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <BarChart2 className="w-12 h-12 text-[#0077b5] mb-4" />
              <h3 className="text-xl font-bold mb-2">Data-Driven Optimization</h3>
              <p className="text-gray-600">We analyze real-time data to refine campaigns.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="w-12 h-12 text-[#0077b5] mb-4" />
              <h3 className="text-xl font-bold mb-2">E-commerce Growth Experts</h3>
              <p className="text-gray-600">We've scaled brands from 5 to 7 figures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How We Scale Your Store with Facebook Ads
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-[#0077b5] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Free Strategy Call</h3>
              <p className="text-gray-600">We analyze your store & find hidden revenue opportunities.</p>
            </div>
            <div className="relative">
              <div className="bg-[#0077b5] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Custom Ad Plan</h3>
              <p className="text-gray-600">We build & launch a winning Facebook Ads strategy.</p>
            </div>
            <div className="relative">
              <div className="bg-[#0077b5] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Sales & Growth Scaling</h3>
              <p className="text-gray-600">We optimize, test, and scale to maximize profits.</p>
            </div>
            <div className="relative">
              <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
              <p className="text-gray-600">We track data, refine, and help you dominate your market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories: See How We Scale eCommerce Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-[#0077b5] mb-2">Fashion Brand</div>
              <p className="text-4xl font-bold mb-4">$10K → $100K</p>
              <p className="text-gray-600">in 3 Months</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-[#0077b5] mb-2">Beauty Brand</div>
              <p className="text-4xl font-bold mb-4">4X ROAS</p>
              <p className="text-gray-600">in 60 Days</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold text-[#0077b5] mb-2">Home & Decor</div>
              <p className="text-4xl font-bold mb-4">7-Figure</p>
              <p className="text-gray-600">Sales from Facebook Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">How much do I need to spend on ads?</h3>
              <p className="text-gray-600">We recommend a minimum monthly ad spend of $5,000 to see significant results.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">How long before I see results?</h3>
              <p className="text-gray-600">Most clients see initial results within 30 days, with significant scaling by 60-90 days.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What niches do you work with?</h3>
              <p className="text-gray-600">We specialize in fashion, beauty, home goods, and electronics, but work with any eCommerce brand showing product-market fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0077b5] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Are You Ready to Scale Your Store with Facebook Ads?
          </h2>
          <Link 
            to="/consultation" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-all"
          >
            Book a Free Call Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}