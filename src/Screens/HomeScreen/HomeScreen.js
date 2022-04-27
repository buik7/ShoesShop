import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {colors} from '../../Themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../../Components/Product/Product';
import {
  getFeaturedProductListThunk,
  getProductListByCategoryThunk,
  getProductListThunk,
} from '../../Redux/thunks/productThunk';
import {getCategoryListThunk} from '../../Redux/thunks/categoryThunk';
import {screenNames} from '../../Navigation/constants/screenNames';

const HomeScreen = ({navigation}) => {
  const [chosenCategory, setChosenCategory] = React.useState('All');
  const {categoryList} = useSelector(state => state.categoryReducer);
  const {productList, featuredProductList} = useSelector(
    state => state.productReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListThunk);
    dispatch(getFeaturedProductListThunk);
    dispatch(getCategoryListThunk);
  }, [dispatch]);

  const getCategoryList = React.useCallback(
    () => [{id: 'All', category: 'ALL'}, ...categoryList],
    [categoryList],
  );

  const renderCategories = React.useCallback(
    ({item}) => {
      if (item.id === chosenCategory) {
        return (
          <View style={[styles.category, styles.chosenCategory]}>
            <Text style={[styles.categoryText, styles.chosenCategoryText]}>
              {item.category}
            </Text>
          </View>
        );
      }

      return (
        <TouchableOpacity onPress={onCategoryChange(item.id)}>
          <View style={styles.category}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
        </TouchableOpacity>
      );
    },
    [chosenCategory],
  );

  const onCategoryChange = React.useCallback(
    newCategory => {
      return () => {
        if (newCategory === 'All') {
          dispatch(getProductListThunk);
        } else {
          dispatch(getProductListByCategoryThunk(newCategory));
        }
        setChosenCategory(newCategory);
      };
    },
    [chosenCategory],
  );

  const navigateToDetail = React.useCallback(
    id => () =>
      navigation.navigate(screenNames.detailScreen, {
        id,
      }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.blockContainer, styles.mb10]}
        onPress={() => navigation.navigate(screenNames.searchScreen)}>
        <SearchBar editable={false} />
      </TouchableOpacity>
      <Text style={[styles.textBold, styles.mb15]}>Category</Text>
      <FlatList
        horizontal
        data={getCategoryList()}
        renderItem={renderCategories}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        style={styles.mb20}
      />
      <Text style={[styles.textBold, styles.mb20]}>Products</Text>
      <FlatList
        horizontal
        data={productList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Product product={item} navigate={navigateToDetail(item.id)} />
        )}
        ItemSeparatorComponent={() => <View style={{width: 5}} />}
        style={styles.mb20}
      />
      <Text style={[styles.textBold, styles.mb20]}>Popular</Text>
      <FlatList
        horizontal
        data={featuredProductList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Product product={item} navigate={navigateToDetail(item.id)} />
        )}
        ItemSeparatorComponent={() => <View style={{width: 5}} />}
        style={styles.mb20}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.background,
  },
  blockContainer: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  textBold: {
    fontWeight: '800',
    fontSize: 20,
    color: '#484445',
  },
  category: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  chosenCategory: {
    backgroundColor: colors.focused,
  },
  categoryText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  chosenCategoryText: {
    color: colors.white,
    fontWeight: '800',
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
});
