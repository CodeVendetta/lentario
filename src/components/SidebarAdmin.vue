<template>
  <div class="flex min-h-screen h-full font-poppins">
    <aside class="bg-white shadow-xl py-4 z-10">
      <div class="flex flex-col h-full items-center">
        <a href="#" class="mb-10 mt-2 mx-10">
          <img src="../assets/LenTario.svg" alt="Logo" width="100" />
        </a>

        <ul class="flex flex-col space-y-4">
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="relative flex items-center py-2 text-sm transition-all group px-8"
            :class="{
              'text-[#0C8CE9]': activePage === item.name,
              'text-[#B1B1B1]': activePage !== item.name,
              'hover:text-[#0C8CE9]': true
            }"
            @mouseover="hoveredItem = item.name"
            @mouseleave="hoveredItem = null"
          >
            <span
              v-if="activePage === item.name"
              class="absolute left-0 h-[120%] w-1 bg-[#0C8CE9] rounded-r-full"
            ></span>

            <a :href="item.link" class="flex flex-row gap-4 items-center w-full space-x-2">
              <img
                :src="require(`../assets/${getIcon(item)}`)"
                alt="icon"
                class="w-5 h-5 transition-all duration-200"
              />
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    
    <main class="flex-1 bg-[#F5F7FA]">
      <nav class="w-full bg-white h-16 z-20 relative top-0">
        <h1 class="p-5 font-semibold text-[#1E1E1E] text-xl">Admin</h1>
      </nav>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "SidebarAdmin",
  props: {
    activePage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      hoveredItem: null,
      menuItems: [
        { name: "Dashboard", link: "/dashboardadmin", icon: "icondashboardgrey.svg", icon2: "icondashboardblue.svg" },
        { name: "Tambah Data", link: "/tambahdataadmin", icon: "icontmbhdatagrey.svg", icon2: "icontmbhdatablue.svg" },
        { name: "Persetujuan", link: "/persetujuanadmin", icon: "iconpersetujuangrey.svg", icon2: "iconpersetujuanblue.svg" },
        { name: "Logout", link: "/signout", icon: "iconlogoutgrey.svg", icon2: "iconlogoutblue.svg" },
      ],
    };
  },
  methods: {
    getIcon(item) {
      if (this.activePage === item.name || this.hoveredItem === item.name) {
        return item.icon2;
      }
      return item.icon;
    },
  },
};
</script>
