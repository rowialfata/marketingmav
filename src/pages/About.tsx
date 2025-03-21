import React from 'react';

export function About() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            At Marketing Mavericks, we don’t just run ads—we build highly profitable, data-driven campaigns that help eCommerce brands scale sustainably. Our expertise lies in maximizing ROAS, reducing wasted ad spend, and turning clicks into customers.

With over $50M in ad spend managed and 100+ successful campaigns, we’ve helped brands go from 5 to 7 figures, proving that smart advertising = scalable growth.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}