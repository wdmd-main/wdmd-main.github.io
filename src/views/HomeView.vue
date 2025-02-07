<template>
  <div class="home">
    <div class="title1 font-merri">WDMD 2025 (Workshop on Dependability Modeling and Digitalization)</div>
    <p class="pa pa-header p">"Dependability Modeling and Digitalization" refers to the interaction between business needs and dependability technologies, utilizing the support and capabilities provided by information technology.</p>
    <p class="pa pa-content p">As critical systems such as large high-performance computing cluster for Large Language Model (LLM) training and inference, industrial control systems, automobiles, and robots increasing in complexity, ensuring reliability, safety, and other dependability aspects like robustness, integrity, maintainability, and accountability has become a significant challenge for designers, manufacturers, owners, and operators.</p>
    <p class="pa pa-content p">To address these challenges, advanced technologies, appropriate methodologies, powerful modeling languages and tools, and a shared conceptualization of dependability modeling and digitalization are essential. The WDMD aims to bring together researchers and practitioners to exchange and discuss cutting-edge research and practical applications in the field of dependability modeling and digitalization. This year, the workshop will focus on several key topics: conceptual models for dependability, digitalization in dependability design, software dependability, reliability for large-scale computing systems, reliability and safety of autonomous driving.</p>

    <div class="title2 section-title">Conceptual Models for Dependability</div>
    <p class="pa pa-header p">With technological advancements, the complexity of systems has increased, leading to more prominent dependability issues. The transition from closed to autonomous systems means that traditional dependability models are no longer applicable. We aim to develop new conceptual models for dependability considering human factors, specifications, implementations, environments, and requirements.</p>

    <div class="title2 section-title">Digitalization Design for Dependability</div>
    <p class="pa pa-header p">Engineering for system dependability is crucial to managing system failures throughout its lifecycle. As systems grow in complexity, developing dependability capabilities also becomes more challenging. We seek to establish a digital engineering system for dependability that offers modeled and automated dependability analyses across all phases—concept, planning, development, and verification—resulting in an interpretable, inheritable, and reusable dependability process technology.</p>

    <div class="title2 section-title">Software Dependability</div>
    <p class="pa pa-header p">As software systems scale and become more intricate, guaranteeing their dependability becomes increasingly challenging. This is further compounded in complex cloud environments where issues such as scalability, fault detection, fault tolerance, and deployment need addressing. Modern applications, especially those in critical fields like digital healthcare and precision manufacturing, demand exceptionally high dependability (up to 99.9999%). We expect to develop industry-standard metrics, evaluation models, design principles, and verification methods to ensure both software dependability and the reliability of cloud-based applications and services.</p>

    <div class="title2 section-title">Reliability for Large-scale Computing and Networking Systems</div>
    <p class="pa pa-header p">With the rapid advancement of artificial intelligence, large-scale computing and networking systems are essential for training and inference tasks. These systems must process large datasets in high-performance computing and communication environments while ensuring reliability, computational speed, and accuracy. This call for papers seeks recent research on reliability assessment, fault detection and recovery, performance optimization, and related technologies and methods in large-scale computing and networking systems (e.g., clusters for LLM training and inference, cloud computing platform, etc. ) to enhance the robustness and maintainability.</p>

    <div class="title2 section-title">Reliability and Safety of Autonomous Driving</div>
    <p class="pa pa-header p">Autonomous driving technologies promise transformative changes in transportation, offering greater safety and efficiency. However, ensuring their reliability and safety is crucial by addressing challenges in real-time decision-making, fault tolerance, and sensor fusion. Robust testing and validation are essential to prevent accidents and gain public trust, paving the way for widespread adoption. This topic focuses on methods and technologies for assessing and improving the dependability of autonomous driving systems, addressing challenges in real-time decision-making, fault tolerance, and human-machine interaction.</p>
  </div>
</template>

<style lang="less" scoped>
.home {
  .pa {
    margin-top: 1.4 rem;

    &.pa-header {
      line-height: 1.8;
    }

    &.pa-content {
      line-height: 1.6;
    }
  }

  .section-title {
    margin: 1.6rem 0;
  }
}
</style>