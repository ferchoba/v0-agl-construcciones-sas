export function PrivacyPolicy() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* 1. Información que recopilamos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que recopilamos</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Algeciras Construcciones recopila los datos personales que usted nos proporciona voluntariamente a través de nuestros
            formularios de contacto y cotización, incluyendo:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-6">
            <li className="list-disc">Nombre completo</li>
            <li className="list-disc">Dirección de correo electrónico</li>
            <li className="list-disc">Número de teléfono</li>
            <li className="list-disc">Información sobre su proyecto o consulta</li>
          </ul>
        </div>

        {/* 2. Finalidad del tratamiento */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Finalidad del tratamiento</h2>
          <p className="text-muted-foreground leading-relaxed">
            Los datos personales recopilados tienen como finalidad principal atender sus consultas, solicitudes de cotización y
            brindarle información sobre nuestros servicios de remodelación y construcción.
          </p>
        </div>

        {/* 3. Base legal */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Base legal</h2>
          <p className="text-muted-foreground leading-relaxed">
            El tratamiento de sus datos personales se basa en el interés legítimo del responsable para atender sus solicitudes y
            mantener una relación comercial.
          </p>
        </div>

        {/* 4. Conservación de datos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Conservación de datos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sus datos se conservarán durante el tiempo necesario para gestionar su solicitud y cumplir con las
            obligaciones legales aplicables.
          </p>
        </div>

        {/* 5. Sus derechos */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Sus derechos</h2>
          <p className="text-muted-foreground leading-relaxed">
            Usted tiene derecho a acceder, rectificar y suprimir sus datos personales. Para ejercer estos derechos, puede
            contactarnos a través del correo electrónico aglconstruccionesas@gmail.com.
          </p>
        </div>

        {/* 6. Compartir información */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Compartir información</h2>
          <p className="text-muted-foreground leading-relaxed">
            No cedemos sus datos personales a terceros, salvo cuando sea requerido por obligación legal o autoridad competente.
          </p>
        </div>

        {/* 7. Seguridad */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Seguridad</h2>
          <p className="text-muted-foreground leading-relaxed">
            Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no
            autorizado, alteración, divulgación o destrucción.
          </p>
        </div>

        {/* 8. Contacto */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Contacto</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Si tiene preguntas sobre esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos en:
          </p>
          <div className="bg-muted border border-border p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">Algeciras Construcciones</h3>
            <p className="text-muted-foreground">Email: aglconstruccionesas@gmail.com</p>
            <p className="text-muted-foreground">Teléfono: +57 322 465 5732</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export { PrivacyPolicy as default }
