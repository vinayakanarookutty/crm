import { Page, Text, View, Document, StyleSheet, Image} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { backgroundColor: '#FFFFFF', padding: 0 },
  // Page 1: Hero Section
  heroSection: { height: '45%', position: 'relative', backgroundColor: '#f97316' },
  tornEdge: { position: 'absolute', bottom: -1, width: '100%', height: 40 }, 
  heroContent: { padding: 40, color: '#FFFFFF' },
  mainTitle: { fontSize: 50, fontWeight: 'extrabold', fontStyle: 'italic', textTransform: 'uppercase' },
  
  // Page 2+: Content Sections
  contentPage: { padding: 40, backgroundColor: '#f97316' },
  dayBlock: { marginBottom: 20, flexDirection: 'row', gap: 15 },
  polaroidContainer: { width: 120, padding: 8, backgroundColor: '#FFFFFF', transform: 'rotate(-3deg)' },
  polaroidImg: { width: '100%', height: 100 },
  dayTextContainer: { flex: 1, color: '#FFFFFF' },
  dayHeader: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, borderBottom: 1, borderBottomColor: 'rgba(255,255,255,0.3)' },
  description: { fontSize: 10, lineHeight: 1.6 },

  // Footer / Terms
  footer: { marginTop: 'auto', padding: 20, borderTop: 1, borderTopColor: 'rgba(255,255,255,0.2)' },
  contactText: { fontSize: 8, color: '#FFFFFF', opacity: 0.8 }
});

export const MyItineraryPDF = ({ data }: any) => (
  <Document>
    {/* PAGE 1: COVER  */}
    <Page size="A4" style={styles.page}>
      <View style={[styles.heroSection, { backgroundColor: data.themeColor }]}>
        {data.bgImage && <Image src={data.bgImage} style={{ position: 'absolute', opacity: 0.5 }} />}
        <View style={styles.heroContent}>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{data.duration}</Text>
          <Text style={styles.mainTitle}>{data.title}</Text>
        </View>
      </View>
    </Page>

    {/* PAGE 2: ITINERARY DETAILS [cite: 8, 13] */}
    <Page size="A4" style={[styles.contentPage, { backgroundColor: data.themeColor }]}>
      <Text style={{ fontSize: 24, color: '#FFF', fontWeight: 'bold', marginBottom: 20 }}>Travel ITINERARY</Text>
      {data.days.map((day: any, i: number) => (
        <View key={i} style={styles.dayBlock}>
          <View style={styles.polaroidContainer}>
            {day.img && <Image src={day.img} style={styles.polaroidImg} />}
          </View>
          <View style={styles.dayTextContainer}>
            <Text style={styles.dayHeader}>DAY {day.day} - {day.title}</Text>
            <Text style={styles.description}>{day.description}</Text>
          </View>
        </View>
      ))}
    </Page>

    {/* PAGE 3: TERMS & CONTACT [cite: 49, 73] */}
    <Page size="A4" style={[styles.contentPage, { backgroundColor: data.themeColor }]}>
      <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>Terms & Inclusions</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.description}>• {data.inclusions || "Private Transfers, Accommodation, Daily Breakfast"}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.contactText}>Contact: {data.contactPhone || "+971 56 88 78122"}</Text>
      </View>
    </Page>
  </Document>
);