require 'bibtex'

module Jekyll
  class BibtexGenerator < Generator
    safe true
    priority :high

    def generate(site)
      bib_path = File.join(site.source, '_bibliography', 'references.bib')
      bib = BibTeX.open(bib_path)

      publications = bib.entries.map do |entry|
        entry = entry[1] if entry.is_a?(Array) # Ensure we're working with a BibTeX::Entry object
        {
          'type' => entry.type.to_s,
          'title' => entry.title.to_s,
          'author' => entry.author.to_s,
          'year' => entry.year.to_s,
          'booktitle' => entry.has_field?(:booktitle) ? entry.booktitle.to_s : '',
          'journal' => entry.has_field?(:journal) ? entry.journal.to_s : '',
          'url' => entry.has_field?(:url) ? entry.url.to_s : ''
        }
      end

      site.config['publications'] = publications
    end
  end
end