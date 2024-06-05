import React from "react";
import PageBanner from "../components/common/PageBanner";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import Blogcard from "../components/screens/Home/Blogcard";
import BlogsPagination from "../components/screens/Blogs/BlogsPagination";
import BlogsSide from "../components/screens/Blogs/BlogsSide";

const AllBlogs = () => {
  return (
    <main>
      <PageBanner title="Blogs" />
      <Container>
        <Flex className="mt-[120px] gap-6">
          <div className="w-8/12">
            <BlogsPagination itemsPerPage={12} />
          </div>
          <div className="w-4/12">
            <BlogsSide />
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default AllBlogs;
