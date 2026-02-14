export default function SectionTopic({ topicInRight = true, topic }) {
  return (
    <div className="flex items-center gap-8">
      {topicInRight ? (
        <>
          <h2 className="md:text-5xl text-3xl font-black text-nowrap">
            <span className="text-primary">//</span> {topic}
          </h2>
          <div className="w-full h-px opacity-70 bg-[linear-gradient(to_right,white,white,transparent)]"></div>
        </>
      ) : (
        <>
          <div className="w-full h-px opacity-70 bg-[linear-gradient(to_left,white,white,transparent)]"></div>
          <h2 className="md:text-5xl text-3xl font-black text-nowrap">
            <span className="text-primary">//</span> {topic}
          </h2>
        </>
      )}
    </div>
  );
}
