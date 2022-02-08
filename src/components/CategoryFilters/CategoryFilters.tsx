import { FC } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Song } from "../../models/SongModel";
import { getUniqueCategories } from "../../utils/helper";
import "./CategoryFilters.css";
interface CategoryFiltersProps {
  songs: Song[];
  onCategoryClick: (category: string) => void;
  selectedCategories: string[];
}

const CategoryFilters: FC<CategoryFiltersProps> = ({
  songs,
  onCategoryClick,
  selectedCategories,
}) => {
  const songCategories = getUniqueCategories(songs);

  return (
    <Row className="wrapper">
      <Col>
        <h5 className="mb-4 fw-bold">Filter By Category</h5>
      </Col>
      <div className="filtersBox">
        {songCategories.map((category) => (
          <Button
            key={category}
            variant="outline-primary"
            onClick={() => onCategoryClick(category)}
            active={selectedCategories.includes(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </Row>
  );
};

export default CategoryFilters;
