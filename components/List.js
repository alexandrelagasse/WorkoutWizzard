import { FlatList } from 'react-native';
import Card from './Card';

const List = ({ DATA, navigation }) => (
  <FlatList 
    horizontal
    data={DATA}
    renderItem={({ item }) => 
      <Card 
        title={item.title}
        description={item.description}
        image={item.image}
        time={item.time}
        nb={item.nb}
        navigation={navigation}
        id={item.id}
        label={item.label}
      />
    }
    keyExtractor={item => item.id}
    contentContainerStyle={{ paddingRight: 50 }}
  />
);

export default List;
