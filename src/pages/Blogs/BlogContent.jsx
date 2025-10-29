import React from "react";
import { motion } from "framer-motion";
import { Gem, HandHeart, Star } from "lucide-react";
import image1 from "../../assets/Blog/blogcontent.jpg";
import image2 from "../../assets/Blog/bgimg.png";
import image3 from "../../assets/Blog/blog3.jpg";
import image4 from "../../assets/Blog/blog4.jpg";
import image5 from "../../assets/Blog/blog5.jpg";
import image6 from "../../assets/Blog/blog6.jpg";





const BlogContent = () => {
  return (
    <div className="text-gray-800 bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen">
      {/* Hero Section */}
      <div
  className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${image1})`,
  }}
>
  <div className="absolute inset-0 bg-black/50" />
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center px-6"
  >
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
      How to Wear Rudraksha
    </h1>
    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
      Discover the spiritual and healing powers of Rudraksha — the sacred
      seed of Lord Shiva.
    </p>
  </motion.div>
</div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-10 space-y-16 leading-relaxed text-[17px]">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/90 shadow-lg rounded-3xl overflow-hidden border border-amber-100"
        >
          <div className="md:flex">
            <motion.img
              src= {image2}
              alt="Rudraksha beads"
              className="md:w-80 w-full object-cover h-40 md:h-auto"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold text-red-700 mb-4">
                Spiritual Significance
              </h2>
              <p>
                <span className="font-semibold text-red-700">Rudraksha</span>,
                the holy bead adored in Hinduism, has been associated with{" "}
                <span className="font-semibold text-orange-700">
                  Lord Shiva
                </span>{" "}
                throughout time. It is believed to help on every level —{" "}
                <span className="text-red-700 font-medium">
                  physical, mental, and spiritual
                </span>
                . It serves as a divine shield that repels negativity and
                attracts inner peace and spiritual energy.
              </p>
              <p className="mt-4">
                Beyond faith, Rudraksha beads hold{" "}
                <span className="text-orange-700 font-semibold">
                  metaphysical and astrological
                </span>{" "}
                significance. Each bead (*Mukhi*) resonates with a unique
                vibration that helps align chakras and stabilize emotions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Who Can Wear */}
        <section>
          <h2 className="text-3xl font-bold text-red-700 flex items-center gap-2 mb-8">
            <Gem className="text-orange-500" /> Who Can Wear Rudraksha?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: image4,
                title: "A) Spiritual Seekers",
                desc: "Deepen meditation and connect with God.",
                suggested: "1 Mukhi or 5 Mukhi Rudraksha",
              },
              {
                img: image3,
                title: "B) Professionals & Students",
                desc: "Enhance focus, clarity, and confidence.",
                suggested: "4 Mukhi or 6 Mukhi Rudraksha",
              },
              {
                img: image5,
                title: "C) Those Facing Stress",
                desc: "Heal emotional instability and anxiety.",
                suggested: "7 Mukhi or 9 Mukhi Rudraksha",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-amber-100 hover:shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-orange-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-1">{item.desc}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Suggested:</span>{" "}
                    {item.suggested}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Wearing Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white to-amber-50 shadow-md rounded-3xl p-8 border border-amber-100"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <HandHeart className="text-orange-500" /> Wearing Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <img
              src={image6}
              alt="Wearing Rudraksha"
              className="rounded-2xl shadow-md object-cover h-64 md:w-full md:h-44"
            />
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Purify the beads by soaking in ghee and milk before wearing.
              </li>
              <li>
                Women should avoid perfumes or chemicals on Rudraksha.
              </li>
              <li>
                Men should maintain purity and chant daily mantras like{" "}
                <span className="font-medium text-orange-700">
                  “Om Namah Shivaya”.
                </span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Do’s & Don’ts */}
        <section>
          <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-2">
            <Star className="text-orange-500" /> Key Do’s & Don’ts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-amber-100 shadow-md"
            >
              <h3 className="font-semibold text-orange-600 mb-3">✅ Do’s</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Condition beads in ghee and milk before wearing.</li>
                <li>Use silk, cotton, or metal threads.</li>
                <li>Apply sacred ash (vibhuti) regularly.</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-amber-100 shadow-md"
            >
              <h3 className="font-semibold text-orange-600 mb-3">❌ Don’ts</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>Don’t share Rudraksha with anyone else.</li>
                <li>Don’t wear damaged beads.</li>
                <li>Avoid chemical soaps or perfumes.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center bg-gradient-to-b from-white to-amber-50 p-10 rounded-3xl border border-amber-100 shadow-md"
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Rudraksha is not merely a bead—it is a{" "}
            <span className="font-semibold text-orange-700">
              symbol of devotion, faith, and divine connection.
            </span>{" "}
            When worn with pure intent, it opens doors to self-realization and
            spiritual consciousness.
          </p>
          <h3 className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400">
            “Wear Rudraksha not as an ornament, but as a bridge to divinity.”
          </h3>
        </motion.section>
      </div>
    </div>
  );
};

export default BlogContent;
