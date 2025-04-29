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
    </div>
  </div>
</template>

<script lang="ts" setup>
import Zio from '@/assets/image/keynotes/Zio.png'
import Sayed from '@/assets/image/keynotes/Sayed.jpg'

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