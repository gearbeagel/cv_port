import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Content = ({ currentSection, data }) => {
  return (
    <div className="flex-1 p-8 overflow-y-auto flex flex-col bg-gray-800 items-center align-items-center">
      {Object.keys(data.sections).map((section) => (
        <section key={section} id={section} className={`mb-10 ${currentSection !== section && 'hidden'}`}>
          <h2 className="text-3xl font-semibold text-white mb-10 text-center">{data.sections[section].title}</h2>
          <div className="flex flex-wrap justify-center">
          {section === 'home' && (
              <div className="bg-gray-700 text-white p-4 rounded-lg w-full max-w-2xl">
                <div className="mt-5">
                  {data.sections[section].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-300">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
            {section === 'info' && (
              <div className="bg-gray-700 text-white p-4 rounded-lg w-full max-w-2xl">
                <div className="mt-5">
                  {data.sections[section].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-300">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
            {section === 'education' &&
              data.sections.education.items.map((item, index) => (
                <div key={index} className="bg-gray-700 text-white p-4 mb-4 rounded-lg w-full max-w-md mx-2">
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-gray-300">{item.location}</p>
                  <p className="text-gray-400">{item.duration}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            {section === 'employment' &&
              data.sections.employment.items.map((item, index) => (
                <div key={index} className="bg-gray-700 text-white p-4 mb-4 rounded-lg w-full max-w-md mx-2">
                  <h3 className="text-xl font-bold">{item.company}</h3>
                  <p className="text-gray-300">{item.location}</p>
                  <p className="text-gray-400">{item.duration}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            {section === 'projects' &&
              data.sections.projects.items.map((item, index) => (
                <div key={index} className="bg-gray-700 text-white p-4 mb-4 rounded-lg w-full max-w-md mx-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.techStack}</p>
                  <p className="text-gray-400">{item.description}</p>
                  <div className="flex space-x-4 mt-2">
                    {item.githubLink && (
                      <a href={item.githubLink} className="text-purple-400 hover:underline">GitHub</a>
                    )}
                    {item.websiteLink && (
                      <a href={item.websiteLink} className="text-purple-400 hover:underline">Website</a>
                    )}
                    {item.githubLinks && item.githubLinks.map((link, i) => (
                      <a key={i} href={link} className="text-purple-400 hover:underline">GitHub Repo {i + 1}</a>
                    ))}
                  </div>
                </div>
              ))}
            {section === 'contact' && (
            <ul className="list-none p-0">
              {data.sections.contact.links.map((link, index) => (
                <li key={index} className="flex items-center mb-2 text-purple-400 hover:underline">
                  {/* Icon Selection based on the link type */}
                  {link.type === 'email' && <FaEnvelope className="mr-2" />}
                  {link.type === 'linkedin' && <FaLinkedin className="mr-2" />}
                  {link.type === 'github' && <FaGithub className="mr-2" />}
                  {link.type === 'twitter' && <FaTwitter className="mr-2" />}
                  
                  <a href={link.url} className="flex items-center">{link.label}</a>
                </li>
              ))}
            </ul>
          )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Content;
