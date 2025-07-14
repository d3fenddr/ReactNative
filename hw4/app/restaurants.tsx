import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
  ImageSourcePropType,
} from 'react-native'
import { Restaurant, restaurants } from '../data/restaurants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function restaurantsScreen() {
  const [selected, setSelected] = useState<Restaurant | null>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const openModal = (item: Restaurant) => {
    setSelected(item)
    setModalVisible(true)
  }

  const bookTable = () => {
    setModalVisible(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      Alert.alert('Готово!', 'Ваш столик забронирован')
    }, 2000)
  }

  const renderItem = ({ item }: { item: Restaurant }) => {
    const source: ImageSourcePropType =
      typeof item.image === 'string'
        ? { uri: item.image }
        : item.image

    return (
      <View style={styles.card}>
        <Image source={source} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardCategories}>{item.categories.join(' - ')}</Text>
          <View style={styles.cardInfoRow}>
            <MaterialCommunityIcons name="star" size={16} color="#FFA500" />
            <Text style={styles.cardInfoText}>{item.rating}</Text>
            <MaterialCommunityIcons name="truck-delivery" size={16} color="#FFA500" style={styles.iconSpacing} />
            <Text style={styles.cardInfoText}>{item.delivery}</Text>
            <MaterialCommunityIcons name="clock-outline" size={16} color="#FFA500" style={styles.iconSpacing} />
            <Text style={styles.cardInfoText}>{item.time}</Text>
          </View>
          <Pressable style={styles.cardButton} onPress={() => openModal(item)}>
            <Text style={styles.cardButtonText}>Подробнее</Text>
          </Pressable>
        </View>
      </View>
    )
  }

  const modalImageSource: ImageSourcePropType | undefined =
    selected && typeof selected.image === 'string'
      ? { uri: selected.image }
      : selected?.image

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(r) => r.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {selected && (
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {modalImageSource && (
                <Image source={modalImageSource} style={styles.modalImage} resizeMode="cover" />
              )}
              <Text style={styles.modalTitle}>{selected.name}</Text>
              <Text style={styles.modalDescription}>
                прекрасное место, где можно насладиться блюдами из следующих категорий: {selected.categories.join(', ')}
              </Text>
              <Pressable style={styles.modalButton} onPress={bookTable}>
                <Text style={styles.modalButtonText}>Забронировать столик</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  list: { padding: 16 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 2,
  },
  cardImage: { width: width * 0.3, aspectRatio: 1 },
  cardDetails: { flex: 1, padding: 12, justifyContent: 'space-between' },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  cardCategories: { fontSize: 12, color: '#666', marginBottom: 8 },
  cardInfoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cardInfoText: { marginLeft: 4, fontSize: 12, color: '#666' },
  iconSpacing: { marginLeft: 12 },
  cardButton: { alignSelf: 'flex-start', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 4, backgroundColor: '#007AFF' },
  cardButtonText: { color: '#fff', fontSize: 12 },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: '85%', borderRadius: 8, backgroundColor: '#fff', padding: 16 },
  modalImage: { width: '100%', height: width * 0.5, borderRadius: 4 },
  modalTitle: { fontSize: 18, fontWeight: '700', marginTop: 12 },
  modalDescription: { marginTop: 8, fontSize: 14, lineHeight: 20 },
  modalButton: { marginTop: 16, paddingVertical: 10, borderRadius: 4, backgroundColor: '#28A745', alignItems: 'center' },
  modalButtonText: { color: '#fff', fontSize: 16 },

  loadingOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.7)' },
})
