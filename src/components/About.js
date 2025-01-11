import React from 'react';
import './css/About.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Daya Chaudhary',
      role: 'Founder & CEO',
      image: 'https://via.placeholder.com/300',
      bio: 'Daya specializes in digital marketing, app development, and Google Play Console services with 5+ years of experience.',
    },
    {
      name: 'Akash Kapri',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/300',
      bio: 'Expert in full-stack development, React, and cloud-based solutions, driving innovation at Digital Line.',
    },
  ];

  return (
    <div className="about-page py-10 text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold typewriter-effect">
          Your Digital Future Awaits
        </h1>
        <p className="mt-4 text-lg">Driving Innovation for Your Success</p>
      </header>
      <div className="container mx-auto px-6">
        {/* Section 1: Company Info */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="Logo.png"
              alt="Digital Solutions"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h2 className="text-3xl font-semibold">About Digital Line</h2>
              <p className="mt-4 text-gray-300">
                We specialize in digital marketing, app development, SEO, and
                Google Play Console optimization, providing cutting-edge
                solutions to transform ideas into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Team Members */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center border p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                <p className="mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Experience */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
          <p className="text-center text-lg text-gray-300">
            Over 5+ years of expertise in delivering scalable solutions, helping
            clients navigate the digital landscape with tailored marketing and
            development strategies.
          </p>
        </section>

        {/* Section 4: Services */}

      </div>
    </div>
  );
};

export default AboutPage;
