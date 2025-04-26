import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { SIGNUP_PLACEHOLDER, SIGNUP_BUTTON, SIGNUP_SUCCESS } from '../utils/constants';
import { InputProps, ButtonProps } from '../types';

const Input: React.FC<InputProps> = ({ 
  type, placeholder, value, onChange, name, required, className 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      className={`p-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${className}`}
    />
  );
};

const Button: React.FC<ButtonProps> = ({ 
  children, type = 'button', onClick, className, disabled 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div id="signup" className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center animate-fade-in">
          {SIGNUP_SUCCESS}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder={SIGNUP_PLACEHOLDER}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="flex-grow"
            />
            <Button type="submit" className="whitespace-nowrap">
              <Send className="h-5 w-5 mr-2" />
              {SIGNUP_BUTTON}
            </Button>
          </div>
          <div className="text-xs text-gray-500 text-center">
            En vous inscrivant, vous acceptez de recevoir des emails concernant notre produit. Vous pouvez vous désinscrire à tout moment.
          </div>
        </form>
      )}
    </div>
  );
};

export default SignupForm;