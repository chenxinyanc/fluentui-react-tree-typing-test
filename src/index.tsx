import {
    Tree,
    TreeItem,
    TreeItemLayout
} from "@fluentui/react-components/unstable";
  
  export const DefaultOpenTrees = () => {
    const defaultOpenTrees = [
      "default-subtree-1",
      "default-subtree-2",
      "default-subtree-2-1"
    ];
  
    return (
      <Tree aria-label="Tree" defaultOpenItems={defaultOpenTrees}>
        <TreeItem value="default-subtree-1">
          <TreeItemLayout>level 1, item 1</TreeItemLayout>
          <Tree>
            <TreeItem content={{ className: "test-class" }}>
              <div>
                <TreeItemLayout>level 2, item 1</TreeItemLayout>
              </div>
            </TreeItem>
            <TreeItem>
              <TreeItemLayout>level 2, item 2</TreeItemLayout>
            </TreeItem>
            <TreeItem>
              <TreeItemLayout>level 2, item 3</TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem value="default-subtree-2">
          <TreeItemLayout>level 1, item 2</TreeItemLayout>
          <Tree>
            <TreeItem value="default-subtree-2-1">
              <TreeItemLayout>level 2, item 1</TreeItemLayout>
              <Tree>
                <TreeItem>
                  <TreeItemLayout>level 3, item 1</TreeItemLayout>
                </TreeItem>
                <TreeItem>
                  <TreeItemLayout>level 3, item 2</TreeItemLayout>
                </TreeItem>
                <TreeItem>
                  <TreeItemLayout>level 3, item 3</TreeItemLayout>
                </TreeItem>
              </Tree>
            </TreeItem>
          </Tree>
        </TreeItem>
      </Tree>
    );
  };
  