<template>
  <div class="keynote-speakers">
    <div class="title1 font-merri title">WDMD 2024 Workshop Keynotes</div>
    <div class="title-tip">ISSREW 2024</div>

    <div class="keynotes">
      <div class="keynote">
        <div class="section-title">Opening Remarks: Risk Assessment of AI Systems</div>
        <div class="title2 section-author">Joseph Sifakis</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">This talk aims to clarify the debate on the risks associated with AI systems by highlighting the important technical issues raised by the assessment of their trustworthiness. After recalling the risk management principles adopted by traditional systems engineering, we explore the extent to which they can be applied to AI systems.We explain that traditional techniques, which at the development time allow guaranteeing desirable properties, cannot be transposed to AI systems, as they are not explainable and do not lend themselves to model-based analysis. An alternative approach applied to complex heterogeneous systems, is to define a reference architecture that enables compositional reasoning for existing solutions, considering the correctness of each of their components separately. We propose a reference architecture for AI agents and perform a high-level analysis of the current state of agent AI with regard to the main trends as well as the completeness and safety of existing solutions. Another direction is to guarantee the desirable properties of AI systems a posteriori, using test methods, as verification is not applicable due to the absence of faithful behavioral models. Clearly, rigorous testing can only be applied to systems whose input-output relationship does not involve sensory or linguistic data. For the latter, we must limit ourselves to validating subjective human-centric properties, assessing the extent to which AI systems can be aligned with human values. We propose a method for specifying and testing these properties under certain conditions, highlighting the distinctive human features that machines can hardly reproduce. In conclusion, we emphasize the need to remain within the framework of risk-based approaches for AI systems, which implies that their use in critical applications would require considerable effort to develop new bases for guaranteeing their trustworthiness.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Joseph Sifakis is emeritus CNRS Research Director at Verimag, Saint-Martin-d’Hères, France, a laboratory that he founded and directed for 13 years. His research interests cover fundamental and applied aspects of system design with a focus on autonomous systems. He received the 2007 Turing Award for his work on model checking.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">AI-powered Safe and Reliable Autonomous Navigation for Self-Driving Vehicles</div>
        <div class="title2 section-author">Yuxiang Sun</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Autonomous navigation refers to automatically moving self-driving vehicles from a start location to a goal location without human intervention. Reliable and safe autonomous navigation is the key to realize autonomous driving. It mainly includes two aspects: environment perception and vehicle control. In recent years, with the impressive advancement of artificial intelligence (AI) technologies, deep learning-based perception and control have also made significant progress. However, the existing technologies are still difficult to realize reliable and safe autonomous navigation in complex environments. In addition, the extensive use of deep neural networks makes autonomous navigation systems like black boxes, which are difficult to explain, thus limiting their applications in real-world scenarios. This talk will focus on safe and reliable autonomous navigation for self-driving vehicles, and introduce our recent research work in the fields of environment perception and end-to-end navigation.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">Human-like Autonomous Driving and Future Challenges in Perception for Intelligent Vehicles</div>
        <div class="title2 section-author">Yanlei Gu</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Autonomous vehicles are more likely to gain widespread acceptance if they can accurately interpret the behaviors of vulnerable road users, such as pedestrians and cyclists, and respond in ways that align with human driving behavior. This capability is becoming increasingly vital as autonomous and human-driven vehicles are expected to coexist on shared roadways in the near future. A key aspect of human driving intelligence is the ability to infer and reason about the intentions of other road users, which enables intuitive decision-making. For instance, when pedestrians intend to cross the street, drivers can recognize their intentions through certain signals, such as turning their heads to check for approaching vehicles. Our research team aims to replicate this human-like intelligence by employing machine learning techniques to develop advanced perception models that recognize the intentions of vulnerable road users. This presentation will introduce our recent work on human-like autonomous driving and discuss the challenges associated with perception in autonomous driving.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">AI-powered software reliability engineering and it's application</div>
        <div class="title2 section-author">Jun Ai</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Software reliability engineering has been widely used in engineering projects since it was put forward, and has played an important role in improving software reliability. However, as the scale of software becomes larger and the architecture becomes more and more complex, especially the network-linked software is more and more common, which makes the traditional software reliability engineering highlight many limitations in practical applications. The rise of artificial intelligence technology has brought new impetus to software reliability engineering. The report will focus on the problems faced by software reliability engineering technology in practical applications, and introduce how to use artificial intelligence technology in some important units of software reliability engineering, so as to further strengthen software reliability engineering technology and provide reliability guarantee for more complex software systems.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Jun Ai, Professor, Vice Dean of School of Reliability and Systems Engineering, Beihang University, China, Deputy Director of Reliability Engineering Technology Research Center, Chair of IEEE Reliability Society Beijing Chapter, Senior Member of IEEE and CCF. His main research field are in software and intelligent system reliability and safety, including: Software failure mechanism and defect prediction, software system intelligent testing, intelligent system/software reliability and safety evaluation, etc. He published more than 60 papers, 3 monograph books, authorized more than 30 patents, headed many research projects in the field of software reliability, and won Science and Technology Progress Award, one Innovation team award, one first prize, and two second prizes.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism</div>
        <div class="title2 section-author">Mohamed Wahib</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">Large Language Models (LLMs) require enormous computational resources to train and deploy effectively. While techniques like data, tensor, and pipeline parallelism have become standard approaches to distribute this workload, the next frontier in parallelism promises to push the boundaries of model scalability and efficiency even further. This talk explores emerging methods and strategies for parallelism beyond the current paradigms, focusing on optimizing memory utilization, improving inter-node communication, and leveraging hardware advancements. We will also discuss the challenges of scaling LLMs and how future innovations in parallelism can unlock unprecedented performance gains.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Mohamed Wahib is a team leader of the “High Performance Artificial Intelligence Systems Research Team” at RIKEN Center for Computational Science (R-CCS), Kobe, Japan. Prior to that he worked as is a senior scientist at AIST/TokyoTech Open Innovation Laboratory, Tokyo, Japan. He received his Ph.D. in Computer Science from Hokkaido University, Japan. His research interests revolve around the central topic of high-performance programming systems, in the context of HPC and AI. He is actively working on several projects including AI-based science, as well as high-level frameworks for programming traditional scientific applications.</p>
        </div>
      </div>

      <el-divider />

      <div class="keynote">
        <div class="section-title">Reliability Analysis and Evaluation of Computing Network</div>
        <div class="title2 section-author">Xing Pan</div>

        <div class="section-content">
          <div class="bold">Abstract: </div>
          <p class="pa">The rapid advancements in cloud computing, high-performance computing, and artificial intelligence (AI) technologies, notably the emergence of large-scale language models (LLM), have not only increased the demand for powerful computing capacity within individual devices but also underscore the necessity for a computing network that can consistently, stably, and efficiently support data transmission and communication. Distinguished from conventional networks by their larger scale, extended operational lifecycles, and intricate service profiles, computing networks present unique challenges in terms of reliability assessment and enhancement. A pressing issue that requires immediate attention is the development of methodologies for the swift and precise evaluation of computing network reliability, along with targeted strategies for improvement. In response to this, this research introduces a reliability analysis and validation methodology for computing networks based on the System Engineering V-model. Oriented to three hierarchical levels—connectivity, performance, and service, it is intended to analyze both singular and coupled failure modes. Additionally, it proposes the methodologies for generating service profiles and flow of computing networks. subsequently, this research conducts reliability simulation assessments, thereby providing an evaluative foundation and guiding principles for optimizing the reliability design of computing networks.</p>

          <div class="bold">Bio:</div>
          <p class="italic">Xing Pan is director of the Security Center for Systems and Intelligent Systems, head of the Department of Safety Science and Engineering, quality management expert of AVIC Group, and editorial board of Systems Engineering and Electronic Technology. His research interests include reliability and risk analysis, system/system engineering theory and method, human-machine system safety analysis and human-factor reliability analysis.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.keynote-speakers {
  .title {
    text-align: center;
  }

  .title-tip {
    text-align: center;
    font-size: 3rem;
  }

  .keynotes {
    .keynote {
      .section-title {
        margin: 3rem 0 0.2rem;
        text-align: center;
        font-size: 3.6rem;
        font-weight: bold;
      }

      .section-author {
        text-align: center;
        font-size: 2rem;
      }

      .section-content {
        font-size: 2rem;

        .pa {
          margin-bottom: 1rem;
        }

        .bold {
          font-weight: bold;
        }
        .italic {
          font-style: italic;
        }
      }
    }
  }
}
</style>