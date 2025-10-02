import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';




export default function SemanaInclusao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>SEMANA DA INCLUSÃO E DIVERSIDADE</Text>
     

      <Image
        source={{ uri: 'https://scontent.fcfc1-1.fna.fbcdn.net/v/t1.15752-9/552437140_2316976958752528_5408427357658633956_n.png?stp=dst-png_s552x414&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JE-QVux2FuMQ7kNvwFG_onJ&_nc_oc=AdnEtKiLZGuGO7DzyAlwdPKkzF9G9jhRPCwjHUjWAx1PjMuxc6IGzT-H-ca_ldvA76U&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fcfc1-1.fna&oh=03_Q7cD3gExyyZAuaJiqgsLKEnQC_Z9yd67N5KbTvsYOL6FF2POLg&oe=6905CD33' }}
        style={styles.image}
        resizeMode="cover"
      />
     

      <Text style={styles.subtitle}>DEFICIÊNCIA AUDITIVA</Text>
     

      <Text style={styles.text}>
        A Semana da Diversidade e Inclusão é um momento dedicado à valorização das diferenças e à promoção de um ambiente mais justo, acolhedor e respeitoso para todas as pessoas. Durante essa semana, refletimos sobre a importância de reconhecer e celebrar a pluralidade de identidades, culturas, histórias e formas de existir.
      </Text>
     

      <Text style={styles.text}>
        A deficiência auditiva afeta milhões de pessoas no mundo e pode variar de leve a profunda. Mais do que uma limitação sensorial, ela nos convida a repensar a comunicação com empatia e respeito.


Promover a inclusão de pessoas surdas ou com perda auditiva significa adotar práticas acessíveis, como o uso da Língua Brasileira de Sinais (Libras), legendas e ambientes que favoreçam a leitura labial.
      </Text>
     
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f8ff',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  smallImage: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  wideImage: {
    width: 320,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0066cc',
    marginBottom: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 25,
    lineHeight: 22,
    textAlign: 'left',
    width: '100%',
  },
});












