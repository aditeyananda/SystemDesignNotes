---
title: System Design 101
date: 2026-02-28
---

This is a placeholder post for your system design notes.

## Example Architecture
Here is a very simple diagram:

```mermaid
graph TD
    A[Client] --> B[Load Balancer]
    B --> C[Server 1]
    B --> D[Server 2]
    C --> E[(Database)]
    D --> E
```

## Example Code
Here is some highlighted code:

```python
def consistent_hash(key, num_buckets):
    # This ensures smooth scaling
    return hash(key) % num_buckets
```
