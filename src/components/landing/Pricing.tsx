import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "₹49",
    period: "/month",
    features: [
      "AI Resume Writing",
      "ATS Optimization",
      "Resume Templates",
      "PDF Export",
    ],
    popular: false,
  },
  {
    title: "Pro",
    price: "₹149",
    period: "/month",
    features: [
      "Unlimited AI",
      "Premium Templates",
      "Resume Analyzer",
      "Cover Letter Generator",
      "Priority Support",
    ],
    popular: true,
  },
  {
    title: "Lifetime",
    price: "₹999",
    period: "One Time",
    features: [
      "Everything in Pro",
      "Future Updates",
      "Lifetime Access",
      "No Monthly Charges",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          title="Simple Pricing"
          subtitle="Choose the plan that helps you land more interviews."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.title}
              className={`rounded-3xl border p-10 shadow-sm ${
                plan.popular
                  ? "border-blue-600 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >

              {plan.popular && (
                <span className="rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-3xl font-bold">
                {plan.title}
              </h3>

              <div className="mt-4 flex items-end gap-2">

                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-slate-500">
                  {plan.period}
                </span>

              </div>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      size={18}
                      className="text-green-500"
                    />

                    {feature}

                  </div>

                ))}

              </div>

              <Button className="mt-10 w-full">
                Get Started
              </Button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}