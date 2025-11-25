---
title: "Καλώς ήρθατε στο ΔΣ Νέων Ορεστιάδας"
date: 2025-11-25
type: landing

design:
  spacing:
    padding: ["20px", "0", "20px", "0"]

sections:
  - block: hero
    content:
      title: ΔΣ Νέων Ορεστιάδας
      image:
        filename: hero.jpg
      text: |
        Η επίσημη φωνή των νέων της πόλης μας. Ελάτε να διαμορφώσουμε το μέλλον μαζί.
      cta:
        label: "Μάθετε Περισσότερα"
        url: "#about"
      cta_alt:
        label: "Επικοινωνία"
        url: "#contact"
    design:
      background:
        gradient_start: "#1e3a8a"
        gradient_end: "#3b82f6"
        text_color_light: true

  - block: features
    content:
      title: Τι Κάνουμε
      subtitle: Οι πυλώνες της δράσης μας
      items:
        - name: Προτάσεις
          description: Καταθέτουμε ολοκληρωμένες προτάσεις στο Δημοτικό Συμβούλιο για θέματα νεολαίας.
          icon: lightbulb
          icon_pack: fas
        - name: Εκδηλώσεις
          description: Διοργανώνουμε πολιτιστικές και ψυχαγωγικές εκδηλώσεις για όλους.
          icon: calendar-alt
          icon_pack: fas
        - name: Εθελοντισμός
          description: Συμμετέχουμε ενεργά σε δράσεις αλληλεγγύης και περιβάλλοντος.
          icon: hands-helping
          icon_pack: fas
    design:
      columns: "3"

  - block: about.biography
    id: about
    content:
      title: Σχετικά με Εμάς
      text: |
        Το Δημοτικό Συμβούλιο Νέων Ορεστιάδας είναι ο θεσμός που δίνει φωνή στη νέα γενιά. 
        
        Στόχος μας είναι η ενεργή συμμετοχή των νέων στα κοινά, η προώθηση του διαλόγου και η ανάληψη πρωτοβουλιών που βελτιώνουν την ποιότητα ζωής στην πόλη μας.
    design:
      background:
        color: "#f8f9fa"

  - block: collection
    content:
      title: Τελευταία Νέα
      subtitle: Μείνετε ενημερωμένοι για τις δράσεις μας
      count: 3
      filters:
        author: ""
        category: ""
        exclude_featured: false
        publication_type: ""
        tag: ""
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: 3

  - block: contact
    id: contact
    content:
      title: Επικοινωνία
      subtitle: Θέλουμε να ακούσουμε την ιδέα σου!
      text: |
        Έχεις κάποια πρόταση; Θέλεις να γίνεις μέλος; Στείλε μας μήνυμα.
      email: dsn-orestiadas@example.com
      address:
        street: Βασ. Κωνσταντίνου 11
        city: Ορεστιάδα
        region: Έβρος
        postcode: '68200'
        country: Ελλάδα
      coordinates:
        latitude: '41.5033'
        longitude: '26.5299'
    design:
      columns: "2"
---
