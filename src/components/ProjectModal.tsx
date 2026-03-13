import { useStore } from '@nanostores/react';
import { activeProjectModal } from '../stores/modalStore';
import Modal from './Modal';
import ReactMarkdown from 'react-markdown';
import Badge from './ui/Badge.tsx';

export default function ProjectModal() {
  const project = useStore(activeProjectModal);
  
  return (
    <Modal
      isOpen={!!project}
      onClose={() => activeProjectModal.set(null)}
      className="max-w-3xl"
    >
      {project && (
        <div className="text-spanish-gray">
          <h2 className="text-cultured text-2xl md:text-3xl font-bold mb-2 md:mb-4">{project.title}</h2>
          <p className="mb-2">{project.description}</p>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <Badge className="text-xs px-2 py-1 bg-cultured/10 rounded-lg text-spanish-gray">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <hr className="border-cultured/20 mb-4" />

          {project.body && (
            <div className="px-2 [&_img]:my-4 [&_img]:rounded-lg [&_img]:w-full [&_p]:mb-4 [&_p]:last:mb-0">
              <ReactMarkdown>{project.body}</ReactMarkdown>
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="w-full flex flex-wrap justify-center items-center gap-2 mt-6"> 
              {project.liveUrl && (
                <a 
                  className="border text-cultured border-cultured rounded-2xl px-4 py-2 hover:border-carmine-pink hover:bg-carmine-pink/20 transition-all duration-300" 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              )}

              {(project.liveUrl && project.githubUrl) && (
                <span className="text-sm leading-0.5">●</span>
              )}

              {project.githubUrl && (
                <a 
                  className="border text-cultured border-cultured rounded-2xl px-4 py-2 hover:border-carmine-pink hover:bg-carmine-pink/20 transition-all duration-300" 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}