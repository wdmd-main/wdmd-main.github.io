<template>
  <div class="keynote-speakers">
    <div class="title1 font-merri title">WDMD 2025 Workshop Keynotes</div>
    <div class="title-tip">DSN 2025</div>

    <div class="keynotes">
      <div class="keynote">
        <el-row :gutter="24">
          <el-col :span="8">
            <img class="img" :src="Zio" />
          </el-col>

          <el-col :span="16">
            <div class="name">Enrico Zio</div>

            <div class="keynote-title">
              <span class="bold">Title: </span>
              <span class="italic">AI for Intelligent Maintenance</span>
            </div>

            <div class="keynote-abstract">
              <p>
                <span class="bold">Abstract: </span>
                <span class="italic">The advancement of monitoring capabilities and other technologies have enabled the abundant collection of knowledge, information and data (KID) on equipment operation. Such KID can be used to evaluate and predict the state of health of industrial equipment, for its intelligent maintenance.</span>
              </p>
              <p class="italic">In this keynote lecture, we look at the grown ability of analyzing KID by artificial intelligence algorithms to mine out information relevant to the assessment and prediction of the functional state of equipment, and show how to use these capabilities for intelligent maintenance. Also, a critical reflection is offered with regards to the challenges that need to be addressed for the actual deployment of AI in industrial practice.</p>
            </div>
          </el-col>
        </el-row>

        <div class="keynote-bio">
          <p>
            <span class="bold">Bio: </span>
            <span class="italic">Enrico Zio holds MSc degrees in nuclear engineering from Politecnico di Milano (1991) and mechanical engineering from UCLA (1995), as well as PhD degrees in nuclear engineering from Politecnico di Milano (1996) and probabilistic risk assessment from MIT (1998). He is a full professor at École des Mines Paris (PSL University) and Politecnico di Milano, where he also serves as President of the Alumni Association and Vice-President of the Foundation.</span>
          </p>

          <p class="italic">A world-leading expert in risk assessment and reliability engineering, Zio has received numerous accolades, including the Humboldt Research Award (2020) and IEEE Fellowship (2023). He has published over 600 papers, with an h-index of 107 (top 2% of scientists globally). In 2023-2024, he was appointed Scientific Director of Datrix AI Solutions, awarded lifetime achievement honors by the Society for Reliability and Safety, and named Chair Professor at Harbin Institute of Technology. His work pioneers AI applications in system safety and resilience.</p>
        </div>
      </div>

      <el-divider class="divider"/>

      <div class="keynote">
        <el-row :gutter="24">
          <el-col :span="8">
            <img class="img" :src="yuuxanliang" />
          </el-col>

          <el-col :span="16">
            <div class="name">Yuxuan Liang</div>

            <div class="keynote-title">
              <span class="bold">Title: </span>
              <span class="italic">When Spatio-Temporal Data Meet Large Language Models</span>
            </div>

            <div class="keynote-abstract">
              <p>
                <span class="bold">Abstract: </span>
                <span class="italic">Spatio-temporal data mining is crucial for understanding the complexities inherent in various real-world systems and applications. Despite the significant progress of large language models (LLMs), the development of artificial general intelligence (AGI) with spatio-temporal data capabilities is still in its early stages. Most existing ML or DL models heavily rely on domain knowledge and extensive model tuning, predominantly focusing on prediction tasks. In this talk, we argue that current LLMs have the potential to revolutionize spatio-temporal data mining, thereby promoting efficient decision-making and advancing towards a more universal form of spatio-temporal analytical intelligence. Such advancement could unlock a wide range of possibilities, such as spatio-temporal forecasting, location understanding, and urban planning. This talk encourages researchers and practitioners to recognize the potential of LLMs in advancing spatio-temporal data mining and emphasizes the need for trust in these related efforts.</span>
              </p>
            </div>
          </el-col>
        </el-row>

        <div class="keynote-bio">
          <p>
            <span class="bold">Bio: </span>
            <span class="italic">Dr. Yuxuan Liang is currently an Assistant Professor at The Hong Kong University of Science and Technology (Guangzhou), working on the research, development, and innovation of spatio-temporal data mining and urban computing. He obtained his PhD degree from School of Computing, National University of Singapore. He has published 100+ papers in refereed journals and conferences with 7,500 citations on Google Scholar, and was recognized as Stanford/Elsevier Top 2% Scientists in 2024. He serves as Associate Editor of Neurocomputing (IF=6.0) and Area Chair/Senior PC for prestigious conferences such as KDD, NeurIPS, IJCAI, MM, and ICASSP. He serves as Tutorial Co-Chair for SSTD'25 and Workshop Co-Chair for PAKDD'26. He also regularly serves as Program Chair of the Workshop on Urban Computing (Urbcomp), Workshop on AI for Time Series (AI4TS), and Workshop on Mining and Learning from Time Series (MiLeTS) at KDD, WWW, IJCAI, etc. He received ACM SIGSPATIAL China Rising Star Nomination Award in 2024, the 23rd China Patent Excellence Award in 2021, and SDSC Dissertation Research Fellowship in 2020.</span>
          </p>
        </div>
      </div>

      <el-divider class="divider"/>

      <div class="keynote">
        <el-row :gutter="24">
          <el-col :span="8">
            <img class="img" :src="Sayed" />
          </el-col>

          <el-col :span="16">
            <div class="name">Ahmed M. A. Sayed</div>

            <div class="keynote-title">
              <span class="bold">Title: </span>
              <span class="italic">Advancing Decentralized AI: Scalable, Adaptive, and Client-Centric Learning Systems</span>
            </div>

            <div class="keynote-abstract">
              <p>
                <span class="bold">Abstract: </span>
                <span class="italic">Decentralised AI systems, particularly those employing federated learning (FL), offer a promising approach to training machine learning models across distributed data sources while preserving privacy. However, they face significant challenges, including system heterogeneity, dynamic client availability, and resource constraints. Addressing these issues is crucial for the effective deployment of FL in real-world scenarios.</span>
              </p>
              <p class="italic">In this talk, I will discuss our recent efforts to enhance the robustness and adaptability of FL systems. This includes the development of <span class="b">FLOAT</span>, an automated tuning framework that dynamically optimises resource utilisation to meet training deadlines, mitigating stragglers and dropouts through various optimisation techniques. We also introduce <span class="b">REFL</span>, a resource-efficient FL framework that decouples the collection of participant updates from model aggregation, intelligently selecting participants based on their likelihood of future availability to maximise resource utilisation. Additionally, <span class="b">QKT</span> is presented as a framework that enables tailored knowledge acquisition to fulfil specific client needs without direct data exchange, employing a data-free masking strategy to facilitate communication-efficient query-focused knowledge transfer while refining task-specific parameters to mitigate knowledge interference and forgetting. Our UKRI-EPSRC-funded project, <span class="b">KUber</span>, addresses these challenges by developing a distributed knowledge delivery system to enhance FL scalability and efficiency. KUber’s architecture facilitates seamless knowledge exchange among learning entities, optimising resource utilisation and model convergence</p>
            </div>
          </el-col>
        </el-row>

        <div class="keynote-bio">
          <span class="bold">Bio: </span>
          <span class="italic">Ahmed M. A. Sayed is an Associate Professor at Queen Mary University of London, UK. He leads the Scalable Adaptive Yet Efficient Distributed (SAYED) Systems Research Group at QMUL. He received his Ph.D. in Computer Science and Engineering from Hong Kong University of Science and Technology, Hong Kong, in 2017. Formerly, he was a Research Scientist at KAUST, Saudi Arabia, and a Senior Researcher with Huawei's Future Networks Lab in Hong Kong.  He is an investigator on several UK and international grants totalling nearly USD 1.5 million in funding. His research interests lie in the intersection of distributed systems, computer networks, and machine learning. His work appears in top-tier conferences and journals, including NeurIPS, AAAI, ICLR, MLSys, ACM EuroSys, IEEE INFOCOM, IEEE ICDCS, IEEE ICC/Globecom, IEEE/ACM ToN, IEEE IoTJ, IEEE TCC, IEEE TBD, IEEE TCSS, IEEE TIFS, Elsevier FGCS, IoT and Computer Networks.</span>
        </div>
      </div>

      <el-divider class="divider"/>

      <div class="keynote">
        <el-row :gutter="24">
          <el-col :span="8">
            <img class="img" :src="zhengyang" />
          </el-col>

          <el-col :span="16">
            <div class="name">Yang Zheng</div>

            <div class="keynote-title">
              <span class="bold">Title: </span>
              <span class="italic">Reliability challenges and opportunities for AI infra: from industry perspective</span>
            </div>

            <div class="keynote-abstract">
              <p>
                <span class="bold">Abstract: </span>
                <span class="italic">AI clusters are emerging as a critical infrastructure and technological frontier. As models grow in size following scaling laws, ensuring stable and reliable operation of large-scale model tasks on massive AI clusters has become a significant challenge in the industry.</span>
              </p>
              <p class="italic">Training and inference tasks for large models are highly coupled and low-fault-tolerant systems. Distributed training involves frequent communication between nodes, strong dependencies across parallel domains, and requirements for proper computational accuracy. These factors lead to frequent training interruptions due to hardware failures, slow recovery, and fail-slow. Additionally, silent data corruptions can result in model non-convergence. As the scale of training expands, reliability becomes a major bottleneck.</p>
              <p class="italic">The key challenge is to build a highly available AI system architecture capable of supporting scenarios such as training on clusters with hundreds of thousands of cards, inference on super-nodes with hundreds or thousands of cards, and integrated training-inference tasks. Achieving "zero" perception of fault recovery in business operations is essential for ensuring the reliability of large model infrastructures. Addressing these challenges will be critical for advancing the scalability and robustness of AI systems in the future.</p>
            </div>
          </el-col>
        </el-row>

        <div class="keynote-bio">
          <span class="bold">Bio: </span>
          <span class="italic">Dr. Yang Zheng is a principle Engineer of Reliability Technology Lab of Huawei Technologies Co., Ltd.. Dr Zheng is also currently a member of reliable AI infra project, focus on research on AI Infra testing, monitoring and recovery. Dr Yang Zheng received his PhD degree from Imperial College London in UK. Research interest includes elastic training/inference, silent data corruption.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Zio from '@/assets/image/keynotes/Zio.png'
import yuuxanliang from '@/assets/image/keynotes/yuuxanliang.jpg'
import Sayed from '@/assets/image/keynotes/Sayed.jpg'
import zhengyang from '@/assets/image/keynotes/zhengyang.jpg'
</script>

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
    margin-top: 48px;

    .keynote {
      .img {
        width: 100%;
      }

      .name {
        text-decoration: underline;
        font-weight: bold;
        font-size: 2rem;
      }

      .keynote-title {
        margin-top: 16px;
      }

      .keynote-abstract {
        margin-top: 16px;

        .b {
          color: #2131a1;
          font-weight: bolder;
          font-style: normal;
        }
      }

      .keynote-bio {
        margin-top: 48px;
      }

      .bold {
        font-weight: bold;
      }
      .italic {
        font-style: italic;
      }
    }
  }

  .divider {
    margin: 48px 0;
  }
}
</style>