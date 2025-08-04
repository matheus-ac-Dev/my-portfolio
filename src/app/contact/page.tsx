export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Contato</h1>
      <form
        action="https://formspree.io/f/xzzvjzve"
        method="POST"
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Nome</span>
          <input
            type="text"
            name="name"
            required
            className="border border-zinc-300 rounded px-3 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Email</span>
          <input
            type="email"
            name="email"
            required
            className="border border-zinc-300 rounded px-3 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Mensagem</span>
          <textarea
            name="message"
            required
            rows={5}
            className="border border-zinc-300 rounded px-3 py-2 dark:bg-zinc-800 dark:border-zinc-700"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
