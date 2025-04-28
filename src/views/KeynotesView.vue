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
            <span class="italic">Enrico Zio received the MSc degree in nuclear engineering from Politecnico di Milano (1991) and in mechanical engineering from UCLA (1995), the Ph.D. degree in nuclear engineering from Politecnico di Milano (1996) and in probabilistic risk assessment at MIT (1998). He is full professor at the Centre for research on Risk and Crises (CRC) of Ecole de Mines, Paris, PSL University, Francem and at Politecnico di Milano, Italy, where he is also President of the AlumniAssociation and Vice-President of the Foundation.</span>
          </p>

          <p class="italic">He is adjoint professor at Tromso University in Norway, City University of Hong Kong, Harbin University in China, and IEEE and Sigma Xi Distinguished Lecturer.</p>

          <p class="italic">In 2020, he has been awarded the prestigious Humboldt Research Award from the Alexander von Humboldt Foundation in Germany, one the world's most prestigious research awards across all scientific disciplines. The Award is granted in recognition of a researcher's entire achievements and Professor Zio has been awarded for his being a World leading scientist in Risk and Resilience Assessment, Safety Analysis and Reliability Engineering of complex systems and infrastructures. </p>

          <p class="italic">He is author and co-author of several books and more than 600 papers on international journals, Chairman and Co-Chairman of several international Conferences, associate editor of several international journals and referee of more than 20.</p>

          <p class="italic">His Google Scholar H-index is 107 and he is in the top 2% of the World scientists, according to Stanford ranking and 0.05% according to ScholarGPS.</p>

          <p class="italic">In 2023, he has been appointed as Scientific Director of Research and Development of Datrix AI Solutions group, an AI company listed on Euronext Growth Milan, he has been elevated to the status of IEEE fellow “for contributions to safety and reliability engineering”, he has been elected fellow of Asia-Pacific Artificial Intelligence Association as “the top scientist with outstanding achievements in the area of reliability engineering and risk assessment”, he has been nominated Guest Professor at Harbin Engineering University.</p>

          <p class="italic">In 2024 he has been recognized with the lifetime achievement award by the Society for Reliability and Safety for pioneering the application of AI and GA in support of Risk and Resilience Assessment of Complex Engineering Systems, elected Fellow of the Artificial Intelligence Industry Academy, awarded the Alan O. Plait 2024 Award for a tutorial on industrial applications of Artificial Intelligence at the Reliability and Maintainability Symposium, RAMS, presented the International System Safety Society (ISSS) Educator of the Year Award for outstanding achievement in and contribution to system safety education and the advancement of the state of knowledge in system safety, named Distinguished Research Fellow of the Institute of Nuclear Energy Safety Technology, in Hefei, China and Chair Professor at Harbin Institute of Technology, in Harbin, China, elected in the Italian Association of Technology and Engineering.</p>
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