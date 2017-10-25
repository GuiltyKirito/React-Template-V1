import Content from './common/Content';
import Box from './common/Box';

const Home = () => {
  return (
    <div>
      <Content.Header
        title="title"
        description="description"
        icon="file-text-o"
        header="header"
        item="item"
        subItem="subItem"
      />

      <Content.Body>
        <Box color="primary">
          <Box.Header>Header</Box.Header>
          <Box.Body>Body</Box.Body>
        </Box>
      </Content.Body>
    </div>
  );
};

export default Home;
