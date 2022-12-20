export default defineNuxtRouteMiddleware(async function() {
    const utente = await $fetch("/api/auth/session")
    if (utente?.role!="Ristorante") {
       throw createError({ statusCode: 401, statusMessage: "Unauthorized"})
    }
  })
  