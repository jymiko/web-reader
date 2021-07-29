import React, { useState } from "react";
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 15,
      padding: 10,
      flexGrow: 1
    },
    pageNumbers: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center'
    }
  });
  

const ReaderView = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page} orientation="landscape">
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
            <Page size="A4" style={styles.page} orientation="landscape">
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
            <Page size="A4" style={styles.page} orientation="landscape">
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <View style={styles.section}>
                    <Image src="https://images.unsplash.com/photo-1461710727236-2366afa21725?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"></Image>
                </View>
                <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
    )
}

export default ReaderView;