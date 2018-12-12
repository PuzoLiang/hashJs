import HashTable from './hash';
import figlet  from 'figlet';

figlet('Amazing Hash', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    const vegetables = new HashTable();

vegetables.set("apple",Math.random()*1e20);

vegetables.set("pea",Math.random()*1000);

vegetables.set("Jing.Malan","13303495232");

console.log(`已经找到联系人，他的手机是${vegetables.get("Jing.Malan")}`);
});
