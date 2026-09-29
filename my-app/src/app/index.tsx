import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.studentName}>{name}</Text>
      <Text style={styles.studentDetail}>Course: {course}</Text>
      <Text style={styles.studentDetail}>Units: {units}</Text>
      
      
      {isFullLoad && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Full Load</Text>
        </View>
      )}
    </View>
  );
}


export default function StudentRoster() {
  const initialStudents = [
    { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
    { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
    { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
    { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [useIndexKey, setUseIndexKey] = useState(false); 

  const handleReverse = () => {
    setStudents([...students].reverse());
  };

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        {`${students.length} Students Enrolled`}
      </Text>

      
      <View style={styles.experimentContainer}>
        <TouchableOpacity style={styles.button} onPress={handleReverse}>
          <Text style={styles.buttonText}>🔄 Reverse List</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, useIndexKey ? styles.activeBtn : null]} 
          onPress={() => setUseIndexKey(!useIndexKey)}
        >
          <Text style={styles.buttonText}>
            Key: {useIndexKey ? "Array Index" : "student.id"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        
        {students.map((student, index) => (
          <StudentCard
            key={useIndexKey ? index : student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 60, paddingHorizontal: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 15, textAlign: 'center' },
  experimentContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  button: { backgroundColor: '#007AFF', padding: 12, borderRadius: 8, flex: 0.48, alignItems: 'center' },
  activeBtn: { backgroundColor: '#FF3B30' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  listContainer: { paddingBottom: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 15, elevation: 3 },
  studentName: { fontSize: 18, fontWeight: 'bold', color: '#111', marginBottom: 5 },
  studentDetail: { fontSize: 14, color: '#666', marginBottom: 2 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#E4F9E7', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginTop: 10 },
  badgeText: { color: '#1A8738', fontWeight: 'bold', fontSize: 12 },
});
