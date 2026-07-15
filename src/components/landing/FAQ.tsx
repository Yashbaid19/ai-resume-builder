export default function FAQ() {
    const faqs = [
  {
    question: "Is my resume ATS friendly?",
    answer:
      "Yes. Every resume is optimized for Applicant Tracking Systems."
  },
  {
    question: "Can AI rewrite my resume?",
    answer:
      "Yes. AI improves grammar, wording, impact and professional tone."
  },
  {
    question: "Can I download PDF?",
    answer:
      "Yes. Download your resume instantly in high quality PDF."
  },
  {
    question: "Which file types can I upload?",
    answer:
      "PDF and DOCX are supported."
  },
  {
    question: "Do you store my resume?",
    answer:
      "Only if you create an account. Your data always belongs to you."
  }
];
  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mt-5 mb-14">
  Everything you need to know before building your resume.
</p>

<div className="space-y-5">

  {faqs.map((faq) => (

    <div
      key={faq.question}
      className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
    >

      <h3 className="font-semibold text-xl">
        {faq.question}
      </h3>

      <p className="text-gray-600 mt-3 leading-7">
        {faq.answer}
      </p>

    </div>

  ))}

</div>

      </div>
    </section>
  );
}
