<i18n lang="yaml">
{
  'en':
    {
      'title': 'Privacy',
      'paragraph-1': 'General notice and mandatory information',
      'paragraph-2': 'Designation of the responsible entity',
      'paragraph-3': 'The responsible entity for data processing on this website is:',
      'paragraph-4': 'Roadstars GmbH <br />Mostafa El Noumeiri <br />Kaiser-Friedrich-Straße 65 <br />10627 Berlin',
      'paragraph-5': 'The controller alone or jointly with others determines the purposes and means of the processing of personal data (e.g. names, contact details or similar).',
      'paragraph-6': 'Revocation of your consent to data processing',
      'paragraph-7':
        'Some data processing operations are only possible with your express consent. A revocation of your already give
        consent is possible at any time. An informal communication by e-mail is sufficient for the revocation. The legality of the data processin
        revocation remains unaffected by the revocation.',
      'paragraph-8': 'Right to data portability',

      'paragraph-9':
        'As a data subject, you have the right to lodge a complaint with the competen
        supervisory authority. The competent supervisory authority with regard to questions of data protection law is the state data protection commissione
        of the federal state in which our companys registered office is located. The following link provides a list of th
        data protection officers and their contact details <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/ addresses_links-node.html" target="_blank">click here</a>.',
      'paragraph-10': 'Right to data portability',
      'paragraph-11':
        'You have the right to transfer data that we process automatically on the basis of your consent or in performance of a contract, t
        or to have it handed over to third parties. The data will be provided in a machine-readable format. If you request the direc
        transfer of the data to another responsible party, this will only be done insofar as it is technically feasible.',
      'paragraph-12': 'Right to information, correction, blocking, deletion',
      'paragraph-13':
        'Within the framework of the applicable legal provisions, you have the right at any time to free information about you
        stored personal data, origin of the data, their recipients and the purpose of data processing and, if applicable,
        right to correction, blocking or deletion of this data. In this regard and also for further questions on the subject o
        personal data, you can contact us at any time via the contact options listed in the imprint.',
      'paragraph-14': 'CSSL or TLS encryption',
      'paragraph-15':
        'For security reasons and to protect the transmission of confidential content that you send to us as the site operator, our website uses a
        our website uses SSL or TLS encryption. This means that data you transmit via this website cannot be read by third parties
        third parties. You can recognize an encrypted connection by the "https://" address line of your browser and the lock symbol in the browser line.',
    },
  'de':
    {
      'title': 'Datenschutz',
      'paragraph-1': 'Allgemeiner Hinweis und Pflichtangaben',
      'paragraph-2': 'Benennung der verantwortlichen Stelle',
      'paragraph-3': 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:',
      'paragraph-4': 'Roadstars GmbH Mostafa El Noumeiri Kaiser-Friedrich-Straße 65 10627 Berlin',
      'paragraph-5': 'Der für die Verarbeitung Verantwortliche bestimmt allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o.ä.).',
      'paragraph-6': 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
      'paragraph-7':
        'Einige Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Ein Widerruf Ihre
        bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf ist eine formlose Mitteilung per E-Mai
        ausreichend. Die Rechtmäßigkeit der Datenverarbeitung bleibt durch den Widerruf unberührt.',
      'paragraph-8': 'Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde',
      'paragraph-9':
        'Als betroffene Person haben Sie das Recht, sich mit einer Beschwerde an die zuständig
        Aufsichtsbehörde. Die zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist de
        Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Unte
        folgendem Link finden Sie eine Liste der Datenschutzbeauftragten und deren Kontaktdate
        <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/adressen_links-node.html" target="_blank">Klick hier
        </a>
        .',
      'paragraph-10': Recht auf Datenübertragbarkeit',
      'paragraph-11':
        'Sie haben das Recht, Daten, die wir aufgrund Ihrer Einwilligung oder in Erfüllung eines Vertrages automatisier
        verarbeiten, an zu übermitteln oder an Dritte aushändigen zu lassen. Die Daten werden in eine
        maschinenlesbaren Format zur Verfügung gestellt. Wenn Sie die direkte Übermittlung der Daten an eine
        anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.',
      'paragraph-12': 'Recht auf Auskunft, Berichtigung, Sperrung, Löschung',
      'paragraph-13':
        'Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltlich
        Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zwec
        der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglic
        und auch zu weiteren Fragen zum Thema personenbezogenen Daten können Sie sich jederzeit über die i
        Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.',
      'paragraph-14': 'SSL- oder TLS-Verschlüsselung',
      'paragraph-15':
        'Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreibe
        senden, verwendet unsere Website eine unsere Website eine SSL- oder TLS-Verschlüsselung. Dies bedeutet, dass Daten, die Sie über diese Website übermitteln, nicht von Dritten gelesen werden können.
        Dritte. Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile Ihres Browsers "https://" und dem Schloss-Symbol in der Browserzeile. ',
    },
}
</i18n>
<template>
  <div class="container">
    <page-header :title="$t('title')" />

    <div class="privacy__contents">
      <p>{{ $t('paragraph-1') }}</p>

      <p>{{ $t('paragraph-2') }}</p>

      <p>{{ $t('paragraph-3') }}</p>

      <p v-html="$t('paragraph-4')"></p>

      <p>{{ $t('paragraph-5') }}</p>

      <p>{{ $t('paragraph-6') }}</p>

      <p>{{ $t('paragraph-7') }}</p>

      <p>{{ $t('paragraph-8') }}</p>

      <p v-html="$t('paragraph-9')"></p>

      <p>{{ $t('paragraph-10') }}</p>

      <p>{{ $t('paragraph-11') }}</p>

      <p>{{ $t('paragraph-12') }}</p>

      <p>{{ $t('paragraph-13') }}</p>

      <p>{{ $t('paragraph-14') }}</p>

      <p class="mb-5">{{ $t('paragraph-15') }}</p>
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/common/PageHeader.vue'
export default {
  name: 'Legal',
  components: {PageHeader},
  head: {
    title: 'RoadStar | Privacy',
  },
}
</script>

<style scoped>
.privacy__contents p {
  margin-bottom: 0.75rem;
  color: var(--color-text);
  font-size: 1rem;
}
</style>
