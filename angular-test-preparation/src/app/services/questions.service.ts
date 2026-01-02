import { Injectable } from '@angular/core';

export interface Question {
  id: number;
  title: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
      id: 1,
      title: '¿Por qué deseas trabajar en esta empresa/industria?',
      answer: `Well, I'm genuinely excited about the opportunity to work in the technology industry, particularly in a company that values innovation and technical excellence. As a senior software engineer with experience in full-stack development, I've always been drawn to organizations that push the boundaries of what's possible with technology.

What specifically attracts me to this industry is the constant evolution and the opportunity to solve complex problems that have real-world impact. Throughout my career, I've worked with diverse technologies - on the backend, I have strong experience with Java, PHP, and Node.js, which have been my primary focus areas. On the frontend, I have extensive experience with jQuery, which has been in the market for a long time and where I've spent significant time building applications. I also really enjoy working with React and find Angular very interesting, particularly because of the architectural differences it offers compared to React. I've architected systems using microservices and modern cloud infrastructure. I've found that the most rewarding experiences come from working in environments where technology directly improves people's lives and business processes.

I'm particularly interested in companies that invest in their engineering culture, provide opportunities for continuous learning, and encourage their developers to grow both technically and professionally. The technology industry, especially in software development, offers a unique combination of intellectual challenge and practical application that keeps me motivated.

Furthermore, I believe that working in a forward-thinking tech company allows me to stay at the forefront of emerging technologies. In my work, I've implemented CI/CD pipelines using tools like Jenkins and GitLab CI, containerized applications with Docker, and worked with orchestration platforms. I'm also currently pursuing a PhD in Business, which allows me to bridge the gap between technical solutions and business value - something I'm very passionate about.

Additionally, I recently co-authored a scientific publication on emerging technologies in the banking sector, focusing on FinTech and Blockchain. This experience has deepened my understanding of how technology transforms industries, and I'm eager to apply this knowledge in a practical setting.

In conclusion, I see this industry as the perfect place where I can combine my technical expertise in software engineering with my passion for research and creating innovative solutions, while continuously growing both personally and professionally.`
    },
    {
      id: 2,
      title: '¿Cuáles son tus fortalezas y debilidades?',
      answer: `Let me start by discussing my strengths. I believe my primary strength is my ability to work across the full stack and architect scalable software systems. Over the years, I've developed strong expertise in backend technologies, with Java, PHP, and Node.js being my main areas of focus. On the frontend side, I have extensive experience with jQuery, which has been a cornerstone technology in web development for many years, and I've spent significant time building applications with it. I also really enjoy working with React and find Angular very interesting, especially because of the different architectural approaches and patterns it offers compared to React. I've worked with microservices architecture, implemented GraphQL APIs, and designed database solutions using both SQL and NoSQL databases.

Another significant strength is my problem-solving approach. When faced with a complex technical challenge, I break it down into smaller, manageable components, analyze each part systematically, and then develop a comprehensive solution. This methodology has helped me successfully work on critical projects involving system migrations, performance optimizations, and implementing CI/CD pipelines using tools like Jenkins, GitLab CI, and containerization with Docker.

I'm also strong in continuous learning and knowledge application. Currently, I'm pursuing a PhD in Business while working as a senior engineer, which demonstrates my ability to balance multiple commitments and apply academic knowledge to practical problems. I recently co-authored a scientific publication on FinTech and Blockchain technologies, showing my ability to research, analyze, and contribute to the broader technology community.

I'm also experienced with agile methodologies like Scrum and Kanban, and I understand the importance of collaboration, code reviews, and knowledge sharing within engineering teams.

Now, regarding my weaknesses, I would say that sometimes I can be overly detail-oriented, especially when working on complex architectural decisions or when researching new technologies. This can occasionally slow down the initial development phase. However, I've learned to balance this by setting clear priorities, using time-boxing techniques, and focusing on delivering value incrementally while maintaining quality standards.

Another area I'm continuously working on is improving my communication with non-technical stakeholders. While I'm comfortable discussing technical concepts with my engineering peers - whether it's explaining GraphQL schemas, database optimization strategies, or CI/CD pipeline configurations - I've been actively practicing how to explain complex technical decisions in simpler terms that business stakeholders can understand. My PhD studies have actually helped me develop this skill, as I need to bridge technical and business perspectives regularly.

I believe that recognizing and working on weaknesses is just as important as leveraging strengths, and I'm committed to continuous improvement in all aspects of my professional development.`
    },
    {
      id: 3,
      title: '¿Dónde te ves en 5 años?',
      answer: `In five years, I envision myself in an advanced technical role, such as a Principal Engineer or Software Architect, where I can have a broader impact on technology strategy and system design while remaining deeply involved in hands-on technical work. I want to continue growing as an individual contributor in the technical track, focusing on architecture, system design, and solving complex technical challenges.

From a technical perspective, I want to deepen my expertise in cloud-native architectures, distributed systems, and emerging technologies. I'm particularly interested in how technologies like blockchain, which I've researched academically, can be applied to solve complex business problems in production environments. I also want to expand my knowledge in areas like Kubernetes orchestration, advanced CI/CD strategies, microservices architecture at scale, and system design patterns for large-scale applications.

I see myself taking on more complex architectural challenges - designing systems that are scalable, maintainable, and solve real business problems. I want to be the person teams turn to for guidance on architectural decisions, technology choices, and solving the most difficult technical problems. This means continuing to stay current with emerging technologies, understanding trade-offs deeply, and being able to design solutions that balance technical excellence with business needs.

I also see myself contributing more to the broader software engineering community. I've already started this journey by co-authoring a scientific publication on FinTech and Blockchain, which was published in an internationally indexed journal. In five years, I'd like to continue this path by speaking at conferences, writing more technical articles and blog posts, and potentially contributing to open-source projects that benefit the industry. I believe that sharing knowledge and learning from others is crucial for professional growth, and I want to be recognized as a technical expert in my areas of specialization.

On the technical leadership front, I want to develop my skills in technical mentorship and knowledge sharing. While I don't see myself in a people management role, I do want to mentor other engineers, lead technical discussions, and help guide architectural decisions across teams. My experience with agile methodologies like Scrum and Kanban, combined with my PhD studies in Business, gives me a unique perspective on how technical decisions impact business outcomes, and I want to use this to help teams make better technical choices.

Additionally, by that time, I will have completed my PhD in Business, which will complement my practical software engineering experience with theoretical knowledge in business strategy, innovation, and technology management. This combination of technical depth and business acumen will position me well for roles that require bridging the gap between engineering and business strategy, while remaining in a technical individual contributor role.

Ultimately, my goal is to be in a position where I can influence technology decisions at a strategic level while remaining deeply connected to the code, architecture, and the day-to-day technical challenges. I want to be someone who bridges the gap between technical excellence and business value, using both my engineering expertise and my research background to drive innovation, all while continuing to write code, design systems, and solve complex technical problems.`
    },
    {
      id: 4,
      title: '¿Por qué eres el candidato ideal para este puesto?',
      answer: `I believe I'm the ideal candidate for this position because I bring a unique combination of deep technical expertise, research background, and a proven track record of delivering high-quality software solutions.

From a technical standpoint, I have extensive experience as a senior software engineer working across the full stack. On the backend, I'm highly proficient in Java, PHP, and Node.js, which are my primary areas of expertise. On the frontend, I have extensive experience with jQuery, which has been a fundamental technology in web development for many years, and I've spent significant time building robust applications with it. I also really enjoy working with React and find Angular very interesting, particularly because of the different architectural patterns and approaches it offers compared to React. I have strong experience with GraphQL API design and SQL database optimization. I've worked with modern development practices including CI/CD pipelines using Jenkins and GitLab CI, containerization with Docker, and I understand container orchestration concepts.

What sets me apart is my ability to not just write code, but to think strategically about system design, scalability, and maintainability. I have hands-on experience with microservices architecture, database design and optimization, and implementing agile methodologies like Scrum and Kanban. I understand the importance of code quality, testing strategies, and following SOLID principles and design patterns.

I'm also a strong collaborator and communicator. I've successfully worked with cross-functional teams to deliver complex features, and I'm comfortable leading technical discussions, making difficult architectural decisions, and explaining technical concepts to both technical and non-technical stakeholders. My PhD studies in Business have actually enhanced my ability to bridge technical and business perspectives.

Furthermore, I'm passionate about continuous learning and contributing to the technology community. I recently co-authored a scientific publication on emerging technologies in the banking sector, specifically focusing on FinTech and Blockchain, which was published in an internationally indexed journal. This demonstrates my ability to research, analyze complex topics, and contribute meaningful insights to the field.

I'm also someone who takes ownership of problems and sees them through to completion. I don't just identify issues; I propose solutions, get buy-in from stakeholders, and execute them effectively. My experience with agile methodologies has taught me the importance of iterative development, continuous improvement, and delivering value incrementally.

In summary, I bring the technical depth, research capabilities, and collaborative mindset that this role requires. My unique combination of practical software engineering experience and academic research background positions me well to contribute both technically and strategically to your team's success.`
    },
    {
      id: 5,
      title: '¿Cómo manejarías una situación difícil con un cliente?',
      answer: `When dealing with a difficult situation involving a client, I follow a systematic approach that prioritizes understanding, communication, and problem-solving.

First, I would listen carefully to understand the client's concerns completely. It's crucial to let them express their frustration without interruption and to acknowledge their feelings. I would ask clarifying questions to ensure I fully understand the issue from their perspective, whether it's a technical problem, a misunderstanding about requirements, or a timeline concern.

Once I understand the problem, I would assess the situation objectively. I would investigate the technical aspects if it's a bug or system issue, review the project requirements if it's a scope concern, or analyze the timeline if it's a delivery issue. I would gather all relevant information, consult with my team if necessary, and identify potential solutions.

Then, I would communicate transparently with the client. I believe in being honest about what went wrong, taking responsibility when appropriate, and clearly explaining what steps we're taking to resolve the issue. I would provide a realistic timeline for resolution and set clear expectations about what they can expect.

For example, in a previous situation, a client reported that a feature we had deployed was causing performance issues in their production environment. I immediately acknowledged the problem, assembled a small team to investigate, and within two hours, we identified the root cause. I communicated our findings to the client, explained our fix, and deployed a hotfix within the same day. I also implemented additional monitoring to prevent similar issues in the future.

I would also follow up after resolving the issue to ensure the client is satisfied and to learn from the experience. I believe that difficult situations, when handled well, can actually strengthen client relationships by demonstrating our commitment to their success.

Finally, I would conduct a post-mortem with my team to understand what went wrong and how we can prevent similar issues in the future, turning a difficult situation into a learning opportunity.`
    },
    {
      id: 6,
      title: '¿Cómo proporcionarías un servicio al cliente de alta calidad?',
      answer: `Providing high-quality customer service, especially in a technical context, requires a combination of technical expertise, clear communication, proactive problem-solving, and genuine care for the customer's success.

First and foremost, I believe in being proactive rather than reactive. This means anticipating potential issues before they become problems, providing clear documentation, and setting realistic expectations from the beginning. When working on a project, I ensure that requirements are well-documented, timelines are communicated clearly, and any potential risks are identified early.

Communication is absolutely critical. I make sure to communicate regularly with clients, providing updates on progress, explaining technical decisions in terms they can understand, and being transparent about any challenges we encounter. I believe in over-communicating rather than leaving clients wondering about the status of their project.

When issues do arise, I respond quickly and effectively. I prioritize urgent client concerns and ensure they receive timely updates. I also make myself available for questions and concerns, whether through scheduled meetings or quick responses to emails and messages.

From a technical perspective, I ensure that the solutions I deliver are not just functional, but also well-tested, maintainable, and scalable. I conduct thorough code reviews, implement comprehensive testing strategies, and follow best practices to ensure quality. I also provide clear technical documentation so that clients understand how the system works and can maintain it effectively.

I also believe in going the extra mile. This might mean suggesting improvements that weren't in the original scope, providing additional documentation or training, or helping clients understand how to best utilize the solutions we've built for them.

For example, in a previous project, after delivering a custom API solution, I noticed that the client could benefit from additional monitoring and logging features. Even though these weren't in the original requirements, I implemented them and provided documentation on how to use them, which significantly improved their ability to monitor and troubleshoot their system.

Finally, I always follow up after project completion to ensure everything is working as expected and to gather feedback that can help improve our processes and services in the future.`
    },
    {
      id: 7,
      title: 'Describe una situación en la que trabajaste en equipo',
      answer: `I'd like to share a situation where I was part of a cross-functional team working on implementing a new feature that required coordination across multiple parts of our system. This experience really highlighted the importance of effective teamwork and collaboration in software development.

[SITUATION - Contexto]: The project involved implementing a new API endpoint using GraphQL that needed to integrate with both our frontend application and our backend services. On the backend, we were working with Java and Node.js, and on the frontend, we were using jQuery for some legacy components and React for newer features. The team consisted of frontend developers, backend engineers working with Java, PHP, and Node.js, a database specialist, and a product manager. We were working within an agile framework, using Scrum methodology with daily stand-ups and sprint planning.

[TASK - Desafío]: The challenge was significant because we needed to ensure that the GraphQL schema design met the frontend's data requirements while also being efficient from a database query perspective. We also had to coordinate API versioning and ensure backward compatibility with existing systems. Additionally, we needed to work across different technology stacks and ensure seamless integration.

[ACTION - Acciones tomadas]: What made this teamwork experience particularly valuable was how we organized ourselves. We established a clear communication structure with daily stand-up meetings where each team member shared progress and blockers. We used a shared documentation system to track API contracts, schema definitions, and implementation decisions. Each team member had specific responsibilities, but we also maintained flexibility to help each other when needed.

I was responsible for designing the GraphQL schema and implementing the resolvers, but I frequently collaborated with the frontend developers to understand their data needs, with the database specialist to optimize queries and avoid N+1 problems, and with the DevOps engineer to ensure our CI/CD pipeline could handle the new service deployments.

One particularly challenging moment came when we discovered that our initial GraphQL query design was causing performance issues due to multiple database round trips. Instead of working in isolation, the entire team came together for a technical discussion. The frontend developers helped us understand the actual data usage patterns, the database specialist helped us analyze query performance, and together we redesigned the schema and implemented DataLoader patterns to batch and cache queries efficiently.

The key to our success was trust, open communication, and a shared commitment to delivering a quality solution. We used code reviews effectively, where team members provided constructive feedback on each other's work. We also maintained clear documentation so that future developers could understand the decisions we made.

[RESULT - Resultados]: The project was completed successfully, and the new GraphQL API improved our frontend's ability to fetch exactly the data it needed, reducing over-fetching and under-fetching issues we had with our previous REST API. More importantly, the experience strengthened our team's collaboration patterns and established practices that we continue to use in other projects.

This experience also reinforced my belief in the importance of agile methodologies and how effective teamwork can turn technical challenges into learning opportunities for the entire team. It taught me that when team members trust each other and communicate openly, even complex technical problems can be solved efficiently.`
    },
    {
      id: 8,
      title: '¿Cómo manejas el estrés y la presión en el trabajo?',
      answer: `Managing stress and pressure is something I've learned to handle effectively through a combination of organizational strategies, technical practices, and personal habits. This is particularly important for me because I'm currently balancing a demanding role as a senior software engineer with pursuing a PhD in Business, which requires careful time management and stress management.

From an organizational perspective, I believe in proactive planning and breaking down large, complex tasks into smaller, manageable pieces. When facing a tight deadline or a challenging project, I start by creating a detailed plan that identifies all the tasks, dependencies, and potential risks. This helps me understand the scope of work and prioritize effectively. I've found that working with agile methodologies like Scrum and Kanban helps with this, as they encourage breaking work into smaller, manageable increments.

I also practice time management techniques and use tools to track progress and ensure nothing falls through the cracks. Balancing work and PhD studies has taught me the importance of being realistic about what I can accomplish in a given timeframe and being disciplined about how I allocate my time.

From a technical standpoint, I rely on practices that reduce stress by preventing problems. This includes writing comprehensive tests, conducting thorough code reviews, following SOLID principles, and implementing proper CI/CD pipelines. When I know my code is well-tested, reviewed, and can be deployed reliably through automated processes, I feel more confident and less stressed about potential issues in production.

Communication is also crucial. When I'm under pressure, I make sure to communicate clearly with my team and stakeholders about what's feasible, what the risks are, and what support I might need. I've learned that it's better to ask for help or negotiate deadlines early rather than struggling alone and potentially missing deadlines or compromising on quality.

For example, during particularly stressful periods when I had both work deadlines and academic deadlines, I've learned to communicate my constraints clearly and work with my team to adjust timelines or redistribute work when necessary. This transparency has been key to managing expectations and reducing stress.

On a personal level, I maintain a healthy work-life balance despite my multiple commitments. I make sure to take breaks, exercise regularly, and get adequate sleep. I've found that when I'm well-rested and healthy, I'm much better at handling pressure and making good decisions under stress. This is especially important when juggling multiple responsibilities.

I also practice mindfulness and stress-reduction techniques. When I feel overwhelmed, I take a few minutes to step away, breathe, and refocus. This helps me approach problems with a clearer mind, whether it's a complex technical problem at work or a challenging research question for my PhD.

Finally, I've learned to accept that not everything will be perfect, and that's okay. I focus on delivering value and quality within the constraints we have, rather than striving for unattainable perfection that would only increase stress. This mindset has been particularly helpful in managing the dual demands of my professional and academic work.`
    },
    {
      id: 9,
      title: 'Cuéntame sobre tu experiencia previa',
      answer: `I'd be happy to share my professional experience. I'm currently working as a senior software engineer with extensive experience across the full stack of web development.

Throughout my career, I've worked with diverse technologies and frameworks. On the backend, my main areas of expertise are Java, PHP, and Node.js, which I've used extensively to build scalable server applications and web services. On the frontend side, I have extensive experience with jQuery, which has been a fundamental technology in web development for many years and where I've spent significant time building robust applications. I also really enjoy working with React and find Angular very interesting, particularly because of the different architectural approaches and patterns it offers compared to React. I understand concepts like component architecture, state management, and performance optimization in these modern frameworks.

I have hands-on experience with API design and implementation, particularly with GraphQL, where I've designed schemas, implemented resolvers, and optimized queries to avoid common pitfalls like the N+1 problem. I'm also experienced with RESTful API design and understand the trade-offs between different API approaches.

In terms of databases, I have solid experience with SQL databases, including query optimization, index design, and understanding execution plans. I've also worked with NoSQL databases and understand when to use each type based on the specific requirements of a project.

I've been actively involved in implementing DevOps practices, including setting up CI/CD pipelines using tools like Jenkins and GitLab CI. I understand containerization with Docker and have knowledge of container orchestration concepts. I've worked with agile methodologies, particularly Scrum and Kanban, and understand how to apply these practices effectively in software development teams.

One aspect that makes my experience unique is that I'm currently pursuing a PhD in Business while working as a senior engineer. This dual focus has allowed me to bridge the gap between technical implementation and business strategy. It has enhanced my ability to understand not just how to build software, but why certain technical decisions make business sense.

Recently, I co-authored a scientific publication on emerging technologies in the banking sector, specifically focusing on FinTech and Blockchain. This research work, which was published in an internationally indexed journal, demonstrates my ability to analyze complex technological trends, understand their business implications, and contribute to academic knowledge in the field.

Throughout my career, I've consistently focused on writing clean, maintainable code, following SOLID principles, understanding design patterns, and contributing to a positive engineering culture. I believe in the importance of code reviews, testing, and continuous learning.

I'm particularly proud of my ability to work across different technology stacks, my commitment to continuous learning through both practical experience and academic research, and my ability to contribute to both technical implementation and strategic thinking.`
    },
    {
      id: 10,
      title: '¿Qué aprendiste de tu último trabajo?',
      answer: `My recent work experience has taught me several valuable lessons that have significantly shaped my approach to software engineering and professional development.

First, I learned the importance of balancing technical excellence with practical delivery. Working as a senior engineer, I've learned that sometimes a simpler solution that meets business requirements and can be delivered quickly is more valuable than a complex, technically perfect solution that takes months to build. This doesn't mean compromising on quality, but rather understanding when good enough is actually good enough, and when it's worth investing more time in a more robust solution. This is especially important when working with agile methodologies like Scrum, where iterative delivery and continuous feedback are key.

I also learned a great deal about the importance of understanding the full technology stack. Working across frontend with jQuery, React, and exploring Angular, and backend with Java, PHP, and Node.js, and dealing with databases and APIs has taught me how different parts of a system interact and how decisions in one area affect others. For example, understanding how GraphQL schema design affects frontend performance, or how database query optimization impacts API response times. Working with both established technologies like jQuery and modern frameworks like React and Angular has given me perspective on how web development has evolved and the trade-offs between different approaches.

Another important lesson was about the value of research and continuous learning. My experience co-authoring a scientific publication on FinTech and Blockchain while working as an engineer taught me how academic research can inform practical software development. It showed me the importance of staying current with emerging technologies, understanding their business implications, and being able to evaluate new tools and frameworks critically.

I also learned about the importance of effective communication, especially when bridging technical and business perspectives. My PhD studies in Business, combined with my engineering work, have taught me how to explain complex technical concepts to non-technical stakeholders and how to understand business requirements in technical terms. This skill has been invaluable in getting buy-in for technical initiatives and ensuring alignment between engineering and business goals.

Additionally, I learned about the importance of DevOps practices and automation. Working with CI/CD pipelines, containerization, and understanding how these practices improve development velocity and code quality has been eye-opening. I've learned that investing time in setting up proper automation and infrastructure pays dividends in terms of faster deployments, fewer bugs, and better team productivity.

I also learned about the importance of code quality practices like following SOLID principles, understanding design patterns, and writing maintainable code. These practices might seem like overhead initially, but they significantly reduce technical debt and make systems easier to modify and extend over time.

Finally, I learned about resilience and the importance of a growth mindset. Balancing a demanding engineering role with PhD studies has taught me about time management, prioritization, and maintaining quality under pressure. It's also reinforced the importance of continuous learning and staying curious about new technologies and approaches.

These lessons have made me a more well-rounded engineer and have prepared me well for roles where I need to balance technical excellence with business acumen, research capabilities, and leadership.`
    },
    {
      id: 11,
      title: 'Describe un proyecto del que estés orgulloso',
      answer: `I'm particularly proud of my recent work co-authoring a scientific publication on emerging technologies in the banking sector, specifically focusing on FinTech and Blockchain. This project represents a unique intersection of my technical expertise as a software engineer and my academic pursuits as a PhD student in Business.

The project involved researching and analyzing how financial technology and blockchain are transforming the banking sector, improving financial inclusion, reducing costs, and increasing efficiency and security. What made this project particularly challenging and rewarding was that it required me to combine my practical software engineering experience with rigorous academic research methodology.

From a technical perspective, I was able to contribute insights based on my hands-on experience with modern software development practices, API design, system architecture, and understanding of how technology solutions are implemented in real-world scenarios. I could speak to the practical challenges and opportunities that technologies like blockchain present from an engineering standpoint.

From an academic perspective, the project required extensive literature review, analysis of industry trends, and the ability to synthesize complex information into a coherent research paper. I had to work with co-authors, incorporate feedback, and ensure that the publication met the rigorous standards of an internationally indexed journal.

The publication was accepted and published in ASCE MAGAZINE, and it's now available in Google Scholar, Crossref, and other academic databases. This was particularly meaningful because it represents my first scientific publication, and it demonstrates my ability to contribute to both the practical and theoretical aspects of technology.

What I'm most proud of is that this project showcases my ability to bridge two worlds that are often separate - the practical world of software engineering and the academic world of research. It shows that I can not only build software solutions but also analyze, research, and contribute to the broader understanding of how technology impacts industries.

This project also taught me valuable lessons about persistence, attention to detail, and the importance of clear communication. Writing for an academic audience is different from writing code or technical documentation, and I had to adapt my communication style accordingly.

Additionally, this research work has informed my practical engineering work. Understanding the business and industry implications of technologies like blockchain and FinTech has made me a better engineer because I can now think about solutions not just from a technical perspective, but also from a business and industry transformation perspective.

This project is something I'm genuinely proud of because it represents my commitment to continuous learning, my ability to work across different domains, and my contribution to the broader technology and business community.`
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  getQuestionById(id: number): Question | undefined {
    return this.questions.find(q => q.id === id);
  }
}
