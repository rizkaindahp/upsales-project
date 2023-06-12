<script setup lang="ts">
import DashboardStatisticCard from '@/components/Dashboard/DashboardStatisticCard.vue'
import DashboardGrowthCard from '@/components/Dashboard/DashboardGrowthCard.vue'
import DashboardTransactionCard from '@/components/Dashboard/DashboardTransactionCard.vue'
import DashboardGoalCard from '@/components/Dashboard/DashboardGoalCard.vue'
import DashboardChallangeCard from '@/components/Dashboard/DashboardChallangeCard.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-[30px]">
    <section class="w-full flex flex-col gap-[30px]">
      <!-- START: Statistic Card -->
      <DashboardStatisticCard />
      <!-- START: Your Growth -->
      <DashboardGrowthCard />
      <!-- START: Latest Transactions -->
      <DashboardTransactionCard />
    </section>
    <section class="lg:max-w-[300px] w-full h-max mb-[30px] bg-subtleGrey rounded-2xl p-4">
      <!-- START: Goals Card -->
      <DashboardGoalCard />
      <!-- START: Challenges List -->
      <DashboardChallangeCard />
    </section>
  </div>
</template>
