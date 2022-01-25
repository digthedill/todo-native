import { View, FlatList } from "react-native"
import { useQuery } from "urql"
import Task from "./Task"

const tasksQuery = `
query {
    tasks {
        id
        task
        completed
    }
}`
const TaskContainer = () => {

    const [result, reexecuteQuery] = useQuery({
        query: tasksQuery,
      })
    const { data, fetching, error } = result;
    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Oh no... {error.message}</p>;

    return <View style={{ paddingLeft: "5%", height: '100%' }}>
    <FlatList
      data={data.tasks}
      renderItem={({ item }) => (
        <Task
          key={item.id}
          item={item}
         
        />
      )}
    />
  </View>
}

export default TaskContainer