<template>
  <v-snackbar
    :timeout="time"
    :color="snackbar.color"
    v-model="snackbar.visible"
    location="top"
  >
    {{ snackbar.label }}
  </v-snackbar>
  <div class="flex justify-center items-center h-100vh">
    <div>
      <div class="flex justify-center items-center h-100vh">
        <v-form>
          <v-card class="w-full sm:w-500px bg-light">
            <v-card-title class="py-4">
              <div class="flex justify-center">
                <div>
                  Login
                </div>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="px-5">
                <div class="text-sm py-2">Email</div>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  type="email"
                  v-model="user.email"
                >
                </v-text-field>
              </div>
              <div class="px-5">
                <div class="text-sm py-2">Senha</div>
                <v-text-field
                  density="compact"
                  variant="outlined"
                  :type="!show ? 'password' : 'text'"
                  append-inner-icon="mdi-eye"
                  @click:append-inner="show = !show"
                  v-model="user.password"
                >
                </v-text-field>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <div class="flex w-full py-5 gap-2 justify-center">
                <v-btn
                  class="w-43% text-capitalize"
                  variant="flat"
                  color="#999"
                >Cadastrar</v-btn>
                <v-btn
                  class="w-43% text-capitalize"
                  color="#ccc"
                  variant="flat"
                  @click="login"
                >Logar</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-form>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'default',
})

const emit = defineEmits([
  'sendError'
])

const router = useRouter()
const show = ref(false)

const snackbar = ref({
  visible: false,
  label: '',
  color: '',
  time: 4000
})

const user = ref({
  email: 'murilobalves1@gmail.com',
  password: 'mnbvcxz1234'
})

const login = async () => {
  const credential = await createUser(user.value.email, user.value.password)
  console.log("credential", credential)
  console.log("ola")
}
</script>