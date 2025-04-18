import React from 'react';

const AboutApp = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">About Budget Beacon</h2>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <p className="mb-4">
          <strong>🪙 Budget Beacon</strong> is an all-in-one AI-powered financial assistant built to help
          you take smarter control of your money. Whether you're a student, professional, or investor,
          this app gives you the tools to manage daily expenses, get smart stock suggestions, and plan
          your financial future with ease.
        </p>
        <p className="mb-4">
          Think of it as your personal finance buddy — track spending, use the SIP calculator, stay updated
          with live stock market news, and even chat with our AI for financial tips, all in one clean dashboard.
        </p>
        <p className="mb-4">
          Budget Beacon is ideal for anyone who wants to simplify money management without needing deep
          financial knowledge. It's easy to use, intelligent, and always improving.
        </p>
        <p className="text-sm text-gray-500">
          Version: 1.0.0<br />
          © 2023 Budget Beacon
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
