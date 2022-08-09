<template>
 
  <NavAreaVue/>
  <HeaderArea/>
  <AchivementsArea/>
  <ProjectsArea/>
  <ViewMore></ViewMore>
  <SkillArea/>
  <PublicationsArea/>
  <ContactMe></ContactMe>
  <FooterArea></FooterArea>
</template>

<script>
import NavAreaVue from './components/Nav-Area.vue'
import HeaderArea from './components/Header-Area.vue'
import AchivementsArea from './components/Achivements-Area.vue'
import ProjectsArea from './components/Projects-Area.vue'
import SkillArea from './components/Skill-Area.vue'
import PublicationsArea from './components/Publications-Area.vue'
import ContactMe from './components/Contact-Me.vue'
import FooterArea from './components/Footer-Area.vue'
import ViewMore from './components/View-More.vue'



export default {
  name: 'App',
  components: {
    NavAreaVue,
    HeaderArea,
    AchivementsArea,
    ProjectsArea,
    SkillArea,
    PublicationsArea,
    ContactMe,
    FooterArea,
    ViewMore
}
}
</script>

<style>
@import "./styles.css";
</style>
