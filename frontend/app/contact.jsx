import { StyleSheet, Platform, ScrollView, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={require('@/assets/images/Minimalist_Modern_Coffee_Shop_1_1100x.png.webp')}
          style={styles.headerImage}
        />
      </ThemedView>
      
      <ThemedView style={styles.content}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Contact Us</ThemedText>
        </ThemedView>
        <ThemedText style={styles.subtitle}>We'd love to hear from you! Here's how you can reach us.</ThemedText>
        
        <Collapsible title="Visit Our Cafe">
          <ThemedText>
            123 Coffee Lane{'\n'}
            Beantown, ST 12345{'\n'}
            United States
          </ThemedText>
          <ThemedText style={styles.sectionText}>
            Open Daily: 6:00 AM - 8:00 PM
          </ThemedText>
        </Collapsible>

        <Collapsible title="Get in Touch">
          <ThemedText>
            Phone: <ThemedText type="defaultSemiBold">(555) 123-4567</ThemedText>
          </ThemedText>
          <ThemedText>
            Email: <ThemedText type="defaultSemiBold">hello@beanscene.cafe</ThemedText>
          </ThemedText>
          <ExternalLink href="tel:+15551234567">
            <ThemedText type="link">Call Now</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Social Media">
          <ThemedText>
            Follow us for daily updates, behind-the-scenes content, and special offers:
          </ThemedText>
          <ThemedText style={styles.sectionText}>
            Instagram: @beanscene{'\n'}
            Twitter: @beanscene{'\n'}
            Facebook: @beanscenecafe
          </ThemedText>
        </Collapsible>

        <Collapsible title="Catering & Events">
          <ThemedText>
            Planning an event? We offer full-service catering for corporate events, weddings, and private parties.
          </ThemedText>
          <ThemedText style={styles.sectionText}>
            Email: <ThemedText type="defaultSemiBold">events@beanscene.cafe</ThemedText>
          </ThemedText>
        </Collapsible>

        <Collapsible title="Feedback">
          <ThemedText>
            Your feedback helps us serve you better. Share your experience or suggestions with our team.
          </ThemedText>
          <ExternalLink href="mailto:feedback@beanscene.cafe">
            <ThemedText type="link">Send Feedback</ThemedText>
          </ExternalLink>
        </Collapsible>

        {Platform.select({
          ios: (
            <Collapsible title="Mobile Orders">
              <ThemedText>
                Having issues with your mobile order? Contact our support team:
              </ThemedText>
              <ThemedText style={styles.sectionText}>
                Support: <ThemedText type="defaultSemiBold">support@beanscene.cafe</ThemedText>
              </ThemedText>
            </Collapsible>
          ),
        })}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D0D0',
  },
  headerImage: {
    width: 550,
    height: 230,
    resizeMode: 'contain',
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 16,
  },
  sectionText: {
    marginTop: 8,
  },
});