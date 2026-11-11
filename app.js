<FlatList
        data={tarefasFiltradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.cardTarefa,
            { borderLeftColor: item.prioridade === 'alta' ? '#EF4444' : '#2563EB' }
          ]}>
