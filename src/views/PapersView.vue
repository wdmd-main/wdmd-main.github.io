<template>
  <div class="papers">
    <p class="pa-header p">The WDMD 2025 workshop invites researches and practitioners to submit original research contributions on dependability modeling and digitalization. All the accepted papers will be included in the DSN supplemental volume and the IEEE Xplore Digital Library.</p>

    <div class="title2 section-title">Topics of Interest</div>
    <p class="pa-header p">Topics of the workshop include but are not limited to:</p>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list1"
        :key="index"
      >{{ item }}</li>
    </ul>

    <div class="title2 section-title">Important Dates (AoE)</div>
    <ul class="list">
      <li class="item">
        <span class="label">Submission deadline:</span>
        <span class="value strong">March 31st, 2025 (AoE)</span>
      </li>
      <li class="item">
        <span class="label">Notification deadline:</span>
        <span class="value strong">April 30th, 2025 (AoE)</span>
      </li>
      <li class="item">
        <span class="label">Camera-ready deadline:</span>
        <span class="value strong">May 10th, 2025 (AoE)</span>
      </li>
    </ul>

    <div class="title2 section-title">Paper Categories</div>
    <p class="pa-header p">Submissions can be made in one of the following:</p>
    <ul class="list">
      <li
        class="item"
        v-for="(item, index) in list2"
        :key="index"
      >{{ item }}</li>
    </ul>
    <p class="pa-content p">Papers that exceed the number of pages for that submission category will be rejected without review.</p>

    <div class="title2 section-title">Paper Template</div>
    <p class="pa-header p">Submissions must adhere to the IEEE Computer Society Format Guidelines as implemented by the following LaTeX/Word templates:</p>
    <ul class="list">
      <li class="item">
        <span>LaTex Package (use bare_conf.tex) (ZIP) (<a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip">https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip</a>)</span>
      </li>
      <li class="item">
        <span>Word Template (DOCX) (<a href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx">https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx</a>)</span>
      </li>
    </ul>

    <div class="title2 section-title">Paper Submission</div>
    <div class="submission">
      <div>
        <p class="pa-header p">Submisussions can be made on EasyChair at the following link:</p>
        <p class="pa-content p flex">
          <span class="sq"></span>
          <a href="https://easychair.org/my/conference?conf=dsnw2025" target="_blank">https://easychair.org/my/conference?conf=dsnw2025</a>
        </p>
        <p class="pa-content p">When clicking on "make a new submission" you will be redirected to a page where you can select our "Workshop on Dependability Modelling and Digitalization" workshop, as in the image --></p>
        <p class="pa-content p">If you have any further questions, contact us via <mark>wdmd2012@163.com</mark>.</p>
      </div>
      <el-image
        class="submission-img"
        :src="img1"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="srcList"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import img1 from '@/assets/image/easy_chair_radio.png'

const list1 = [
  'Dependability concept model',
  'The ontology of dependability and its applications',
  'Dependability meta-model',
  'Dependability digital engineering system theory and methods',
  'Model based dependability engineering',
  'Application of System Modelling Language in dependability modelling',
  'Software dependability model',
  'Software dependability design',
  'Software dependability evaluation',
  'Software fault tolerance',
  'Artificial intelligence dependability analysis',
  'Dependability design of safety-critical systems',
  'Software dependability testing',
  'Dependability tools',
  'LLM training/inference clusters dependability model',
  'LLM training/inference clusters dependability design',
  'LLM training/inference clusters dependability evaluation',
  'Reliability Modelling and Evaluation For Large Scale Computing Systems',
  'Simulation Based methods for reliability, safety and security',
  'Reliability and safety of autonomous driving'
]

const list2 = [
  'Full papers: 6 pages (including references)',
  'Short papers: 2 pages (including references)'
]

const srcList = [img1]
</script>

<style lang="less" scoped>
.papers {
  .pa-header {
    line-height: 1.8;
  }

  .pa-content {
    line-height: 1.6;
    margin-top: 1.4rem;
  }

  .section-title {
    margin: 1.4rem 0;
  }

  .list {
    margin-top: 0.6rem;
    .item {
      color: #000;
      font-size: 1.8rem;
      line-height: 1.8;
      margin-top: 0.6rem;

      &:first-child {
        margin-top: 0;
      }

      .label, .strong {
        font-weight: bold;
      }

      .value {
        margin-left: 0.8rem;
      }

      .del {
        text-decoration: line-through;
      }
    }
  }

  .submission {
    display: flex;
    gap: 24px;

    .flex {
      display: flex;
      align-items: center;
      gap: 12px;

      .sq {
        display: block;
        width: 6px;
        height: 6px;
        background-color: #000;
      }
    }

    .submission-img {
      width: 320px;
      flex-shrink: 0;
    }
  }
}
</style>