"use client"

export function TermsAndConditions() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="prose max-w-none">

            {/* 1. Aceptación de los términos */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar este sitio web, usted acepta quedar sujeto a estos términos y condiciones de uso. Si no está de acuerdo
                con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>
            </div>

            {/* 2. Descripción del servicio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio web proporciona información sobre los servicios de remodelación y construcción ofrecidos por Agencia
                Construcciones. La información presentada tiene carácter informativo y puede ser actualizada sin previo aviso.
              </p>
            </div>

            {/* 3. Propiedad intelectual */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Propiedad intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los contenidos de este sitio web, incluyendo textos, imágenes, logotipos, marcas, gráficos, son propiedad de
                Agencia Construcciones o de sus respectivos propietarios y están protegidos por las leyes de propiedad intelectual.
              </p>
            </div>

            {/* 4. Uso del formulario de contacto */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Uso del formulario de contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                El uso del servicio formulario de contacto y cotización implica la aceptación de estos términos y de nuestra política de
                privacidad. La información proporcionada debe ser veraz y actualizada.
              </p>
            </div>

            {/* 5. Limitación de responsabilidad */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitación de responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Agencia Construcciones no se hace responsable por daños directos o indirectos que puedan derivarse del uso de este
                sitio web. La empresa se reserva el derecho de modificar o discontinuar el servicio en cualquier momento.
              </p>
            </div>

            {/* 6. Uso prohibido */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Uso prohibido</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Queda prohibido el uso indebido de este sitio web, incluyendo pero no limitado a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Actividades ilegales o fraudulentas</li>
                <li>Fines de spam o contenido malicioso</li>
                <li>Intentos de acceso no autorizado</li>
                <li>Uso que pueda dañar o sobrecargar el sistema</li>
              </ul>
            </div>

            {/* 7. Disponibilidad del servicio */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Disponibilidad del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                No garantizamos que el servicio esté disponible las 24 horas. No garantizamos la disponibilidad
                limitada durante el servicio. Pueden ocurrir interrupciones por mantenimiento, actualizaciones o causas técnicas.
              </p>
            </div>

            {/* 8. Modificaciones */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </div>

            {/* 9. Ley aplicable */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Ley aplicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos términos y condiciones se rigen por las leyes de Colombia. Cualquier disputa será resuelta en los tribunales
                competentes de Colombia.
              </p>
            </div>

            {/* 10. Contacto */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para preguntas sobre estos términos y condiciones, puede contactarnos en:
              </p>
              <div className="bg-muted border border-border rounded-lg p-4">
                <p className="text-foreground font-semibold">AGL Construcciones</p>
                <p className="text-muted-foreground">Email: aglconstruccionesas@gmail.com</p>
                <p className="text-muted-foreground">Teléfono: +57 322 465 5732</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
